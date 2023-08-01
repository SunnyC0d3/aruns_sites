<?php

/**
 * Image shortcode allows responsive image shortcode to be created
 *
 * @author     Sukhwinder Singh <s.sunny_1995@hotmail.co.uk>
 * @version    1.0.0
 */

//Creating custom responsive image via shortcode
if( ! function_exists( 'responsive_image' ) )
{
     function responsive_image( $atts )
     {
          $html = '';

          $image_id = ! empty( $atts[ 'image_id' ] ) ? sanitize_text_field( $atts[ 'image_id' ] ) : '';
          $image_size = ! empty( $atts[ 'image_size' ] ) ? sanitize_text_field( $atts[ 'image_size' ] ) : 'featured-image';
          $alt = ! empty( $atts[ 'alt' ] ) ? sanitize_text_field( $atts[ 'alt' ] ) : '';
          $caption = ! empty( $atts[ 'caption' ] ) ? sanitize_text_field( $atts[ 'caption' ] ) : '';
          $image_class = ! empty( $atts[ 'img_class' ] ) ? sanitize_text_field( $atts[ 'img_class' ] ) : '';
          $figure_class = ! empty( $atts[ 'figure_class' ] ) ? sanitize_text_field( $atts[ 'figure_class' ] ) : '';

          $img_src = wp_get_attachment_image_url( $image_id, $image_size );
          $img_srcset = wp_get_attachment_image_srcset( $image_id, $image_size );

          $html .= '<figure class="' . esc_attr( $figure_class ) . '">';
          $html .= '<img class="' . esc_attr( $image_class ) . '" src="' . esc_url( $img_src ) . '" srcset="' . esc_attr( $img_srcset ) . '" sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw" alt="' . esc_attr( $alt ) . '" />';
          $html .= $caption ? '<figcaption class="caption">' . esc_attr( $caption ) . '</figcaption>' : '';
          $html .= '</figure>';

          return $html;
     }
     add_shortcode( 'image', 'responsive_image' );
}

/**
 * Bg Image shortcode allows responsive image shortcode to be created
 *
 * @author     Sukhwinder Singh <s.sunny_1995@hotmail.co.uk>
 * @version    1.0.0
 */

//Creating custom responsive image via shortcode
if( ! function_exists( 'responsive_bg_image' ) )
{
     function responsive_bg_image( $atts )
     {
          $image_id = ! empty( $atts[ 'image_id' ] ) ? sanitize_text_field( $atts[ 'image_id' ] ) : '';
          $image_size = ! empty( $atts[ 'image_size' ] ) ? sanitize_text_field( $atts[ 'image_size' ] ) : 'featured-image';

          $img_src = wp_get_attachment_image_url( $image_id, $image_size );

          echo esc_url( $img_src );
     }
     add_shortcode( 'bg_image', 'responsive_bg_image' );
}