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
                        <input tabindex="0" type="radio" value="yes" id="g1" name="yes">
                        <label for="g1">Yes</label>
                     </div>
                     <div class="survey_form-content__body--input-group-radio">
                        <input tabindex="0" type="radio" value="yes" id="g1" name="no">
                        <label for="g1">No</label>
                     </div>
                  </div>
               </div>
            </div>
        </div>';

        return $form;
     }
    add_shortcode( 'survey_form', 'survey_form' );
}