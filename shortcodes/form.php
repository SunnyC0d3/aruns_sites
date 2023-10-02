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
     function survey_form()
     {
        $form = 
        '<div class="survey_form">
            <div class="survey_form-bar">
               <span class="survey_form-bar--progression"></span>
               <span class="survey_form-bar--count">0%</span>
            </div>
            <div class="survey_form-content">
               <button class="survey_form-content__button">Continue</button>
               <span class="survey_form-content__warning"></span>
            </div>
            <div class="survey_form-misc">
               <a class="survey_form-misc--left" href="#"><i class="fa-solid fa-circle-arrow-left"></i> Previous</a>
               <p class="survey_form-misc--right"><i class="fa-solid fa-lock"></i> Your information is secure. <a href="/">Privacy Policy</a></p>
            </div>
        </div>';

        return $form;
     }
    add_shortcode( 'survey_form', 'survey_form' );
}