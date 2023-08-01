<?php

/**
 * This file initialises image sizes.
 *
 * @author     Sukhwinder Singh <s.sunny_1995@hotmail.co.uk>
 * @version    1.0.0
 */

//Adding custom WordPress sizes
add_image_size( 'logo', 200, 100 );
add_image_size( 'background-image', 1920, 1080 );
add_image_size( 'featured-image', 900, 1200 );
add_image_size( 'header-image', 1048, 250 );
add_image_size( 'blog-post-image', 1200, 630 );

//Makes custom sizes available on post types
if( ! function_exists( 'wpb_custom_image_sizes' ) )
{
    function wpb_custom_image_sizes( $size_names ) 
    {
        $new_sizes = array(
            'logo' => 'Logo',
            'background-image' => 'Background Image',
            'featured-image' => 'Featured Image',
            'header-image' => 'Header Image',
            'blog-post-image' => 'Blog Post Image'
        );
        return array_merge( $size_names, $new_sizes );
    }
    add_filter( 'image_size_names_choose', 'wpb_custom_image_sizes' );
}

// This will remove the default image sizes medium and large. 
if( ! function_exists( 'prefix_remove_default_images' ) )
{
    function prefix_remove_default_images( $sizes ) 
    {
        unset( $sizes[ 'medium' ]);          
        unset( $sizes[ 'medium_large' ]);    
        unset( $sizes[ 'large' ]);  

        return $sizes;
    }
    add_filter( 'intermediate_image_sizes_advanced', 'prefix_remove_default_images' );
}
