<?php 
/**
 * Loop: Forms
  */    

    // Get: Active Form Categories
    $args = array(
        'post_type' => 'forms_categories',
        'posts_per_page' => -1,
        'meta_query' => array(
            'key' => 'status',
            'value' => '1',
            'compare' => '='
        ),
    );
    $categories = get_posts($args);
    
    // Check : if on a department detail page
    if( !empty(get_query_var('department')) ){   

        // Only get Forms tagged to this department
        $args = array(
            'post_type' => 'forms',
            'posts_per_page' => -1,
            'meta_query' => array(
                'relation' => 'AND',
                array(
                    'key' => 'status',
                    'value' => '1',
                    'compare' => '='
                ),
                array(
                    'key' => 'department',
                    'value' => get_page_by_path(get_query_var('department'), OBJECT, 'departments')->ID,
                    'compare' => 'LIKE'
                )
            )
        );
    }
    // Check : not on a department detail page
    else {
        // Get all active forms
        $args = array(
            'post_type' => 'forms',
            'posts_per_page' => -1,
            'meta_query' => array(
                'key' => 'status',
                'value' => '1',
                'compare' => '='
            )
        );
    }
    $forms = get_posts($args);

    // set empty content var
    $content = '';
    $format_category = '
        <div class="forms-category">
            <h2>%s</h2>
            %s
        </div>
    ';

    $format_form = '
        <ul class="js__collapsible_list list" id="%s">
            <li>
                <h5 title="Toggle the %s dropdown">%s</h5>
                <div>
                    %s
                    %s
                    <h4>Last Updated</h4>
                    %s
                    %s
                </div>
            </li>
        </ul>
    ';
    
    $format_files = '
        <p><a class="neu__iconlink" href="%s" title="Download %s" aria-label="Download %s" target="_blank">%s</a></p>
    ';

    $format_blocks = '<h4>%s</h4>%s';
    $format_relresources = '
        <li>
            <p><a class="neu__iconlink" %s href="%s" title="View this Related Resource" aria-label="View this Related Resource">%s</a>
        </li>
    ';

    
    
    
    // loop thru the active categories
    foreach( $categories as $category ){
        
        // loop thru each form post to match against the category
        $content_form = '';

        foreach( $forms as $form ){
            
            $fields = get_fields($form);

            // Verify: Form belongs to category && Form is Active
            if( $category->post_name == $fields['category']->post_name && $fields['status'] == '1'){
                $files = $fields['files'];
                // Set: format string for file downloads
                $content_files = '';
                if( !is_null($files) && $files != '' ){
                    foreach( $files as $file ){
                        if( $file['file'] != '' ){
                            $content_files .= sprintf(
                                $format_files
                                ,$file['file']
                                ,( !empty($file['filename']) ) // TITLE ATTR
                                    ? $file['filename']
                                    : 'this file'
                                ,( !empty($file['filename']) ) // TITLE ATTR
                                    ? $file['filename']
                                    : 'this file'
                                ,( !empty($file['filename']) ) // TEXT
                                    ? $file['filename']
                                    : 'Download'
                            );
                        }
                    }
                }
                
                // Set: format string for information blocks
                $content_blocks = '';
                foreach( $fields['information_blocks'] as $infoblock ){
                    $content_blocks .= sprintf(
                        $format_blocks
                        ,$infoblock['title']
                        ,$infoblock['details']
                    );
                }
                $content_relresources = '';
                // If there are related resources to show
                if( !empty($fields['related_resources']) ){
                    // Set: format string for related resources
                    $content_relresources = '
                        <h4>Related Resources</h4>
                        <ul class="forms-category-relatedresources list">
                    ';
                    foreach( $fields['related_resources'] as $relresource ){
                        $ifExt = ( $relresource['external_link'] == 1 ) ? 'target="_blank"' : ''; 
                        $content_relresources .= sprintf(
                            $format_relresources
                            ,$ifExt
                            ,$relresource['link']
                            ,$relresource['title']
                        );
                    }
                    $content_relresources .= '</ul>';
                }

                // Set: format string combining all form elements into a complete form
                $content_form .= sprintf(
                    $format_form
                    ,seoUrl($form->post_title)
                    ,$form->post_title
                    ,$form->post_title
                    ,$content_files
                    ,$content_blocks
                    ,get_the_modified_date('m/d/Y', $form)
                    ,$content_relresources
                );
            }
        }

        // Only print the category if forms exist inside it!
        if( !empty($content_form) ){
            // Set: format string combining each form into its category
            $content .= sprintf(
                $format_category
                ,$category->post_title
                ,$content_form
            );
        }
    }
    echo $content;
 ?>