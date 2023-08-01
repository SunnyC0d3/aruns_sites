<?php

/**
 * Form shortcode adds a survey form that users fill out
 *
 * @author     Sukhwinder Singh <s.sunny_1995@hotmail.co.uk>
 * @version    1.0.0
 */

//Creating custom responsive image via shortcode
if( ! function_exists( 'survey_form' ) )
{
     function survey_form( $atts )
     {
        return 'form';
     }
    add_shortcode( 'survey_form', 'survey_form' );
}