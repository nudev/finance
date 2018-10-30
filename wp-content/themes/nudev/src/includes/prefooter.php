<?php
    wp_reset_query();
    
    
    if( empty($fields) ){
        $fields = get_fields($post->ID);
    }

    
    $prefooterFields = $fields;
    
    
    $return_prefooter = '';
    
    
    if($prefooterFields['use_pre-footer'] == 1){	// if the page is using the pre-footer option
		$prefooterBgColor = ($prefooterFields['background_color'] == ''?' bg_white':' bg_'.$prefooterFields['background_color']);
        if(isset($prefooterFields['pre-footer_image_block']) && $prefooterFields['pre-footer_image_block'] != ''){		// image blocks: image, title, description
			$return_prefooter .= '<div class="nu__prefooter imageblocks'.$prefooterBgColor.'"><p>'.$prefooterFields['pre-footer_area_title'].'</p><div><ul>';
            $guide = '
                <li>
                    <a href="%s" title="%s"%s>
                        <div class="image">
                            <div style="background-image: url(%s);"></div>
                        </div>
                        <h4>%s<span>&#xE8E4;</span></h4>
                        <p>%s</p>
                        <p>Learn More</p>
                    </a>
                </li>
            ';
			foreach($prefooterFields['pre-footer_image_block'] as $r){
                $fields = get_fields($r['items'][0]['item']->ID);
				$return_prefooter .= sprintf(
					$guide
					,$fields['link']
					,$r['block_title'].(isset($fields['external_link']) && $fields['external_link'] == "1"?' [will open in new window]':'')
					,(isset($fields['external_link']) && $fields['external_link'] == "1"?' target="_blank"':'')
					,$fields['image']['url']
					,$r['block_title']
					,$fields['description']
				);
			}
			$return_prefooter .= '</ul></div></div>';
		}
	}
	echo $return_prefooter;	// echo the compiled content back to the footer for the page that called it
?>
