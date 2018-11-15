<?php
/**
 *  May appear on ANY page
 *  EXPECTS a $fields object
 */


    if( empty($fields) ){
        $fields = get_fields($post->ID);
    }


    $content = '<div class="here2help"><h2>We are Here to Help</h2><ul class="h2h-items">';

    $guide = '
        <li class="h2h-items-item">
        <figure style="background-image:url(%s)"></figure>
        %s
        %s
        %s
        %s
        %s
        %s
        </li>
    ';



    // Handle getting/setting the email subject based on the page template
    if( get_page_template_slug($post_id) == 'templates/template-tasks.php' ){
        $subject = $task->post_title;
    } else {
        $subject = $post->post_title;
    }

    // loop thru the 'helpers' post objects (they are staff cpt posts)
    foreach($fields['helpers'] as $i => $helper){



        $subfields = get_fields($helper['helper']->ID);

        $content .= sprintf(
            $guide
            ,$subfields['headshot']['url']
            , (isset($helper['helper']->post_title)) ? '<p>'.$helper['helper']->post_title.'</p>' : null
            , (isset( $subfields['department'][0] )) ? '<p>'.$subfields['department']->post_title.'</p>' : null
            , (isset( $subfields['title'] )) ? '<p>'.$subfields['title'].'</p>' : null
            , (isset( $subfields['expert_at'] )) ? '<p> Expert at: '.$subfields['expert_at'].'</p>' : null
            , (isset( $subfields['phone'] )) ? '<a href="tel:'.$subfields['phone'].'" title="Click to dial number (may open new window)" target="_blank">'.$subfields['phone'].'</a>' : null
            , (isset( $subfields['email'] )) ? ' | <a href="mailto:'.$subfields['email'].'?subject='.$subject.'">e-mail</a>' : null
        );
    }
    // close out the ul and the section
    $content .= '</ul></div>';

    echo $content;
?>
