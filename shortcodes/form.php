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
               <span>0%</span>
            </div>
            <div class="survey_form-content">
               <div class="survey_form-content__body">
                  <h3 class="survey_form-content__body--header">Testing</h3>
                  <div class="survey_form-content__body--input-group">
                     <div class="survey_form-content__body--input-group-radio">
                        <label for="g2">Yes</label>
                        <input tabindex="0" type="radio" value="yes" id="g2" name="yes">
                     </div>
                     <div class="survey_form-content__body--input-group-radio">
                        <label for="g3">No</label>
                        <input tabindex="0" type="radio" value="yes" id="g3" name="no">
                     </div>
                  </div>
               </div>
               <button class="survey_form-content__button">Continue</button>
            </div>
            <div class="survey_form-misc">
               <a class="survey_form-misc--left" href="/"><i class="fa-solid fa-circle-arrow-left"></i> Previous</a>
               <p class="survey_form-misc--right"><i class="fa-solid fa-lock"></i> Your information is secure. <a href="/">Privacy Policy</a></p>
            </div>
        </div>';

        return $form;
     }
    add_shortcode( 'survey_form', 'survey_form' );
}