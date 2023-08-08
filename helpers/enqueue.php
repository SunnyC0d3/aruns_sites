<?php

/**
 * This file initialises styles and scripts that will be loaded on to the theme.
 *
 * @author     Sukhwinder Singh <s.sunny_1995@hotmail.co.uk>
 * @version    1.0.0
 */

//Adding custom WordPress styles
if( ! function_exists( 'enqueue_styles' ) )
{
    function enqueue_styles() 
    {
        wp_enqueue_style( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css', array(), '1.0.0', 'all' );
        wp_enqueue_style( 'fontawesome', get_template_directory_uri() . '/assets/fontawesome/css/fontawesome.css', array(), '1.0.0', 'all' );
        wp_enqueue_style( 'fontawesome-brands', get_template_directory_uri() . '/assets/fontawesome/css/brands.css', array(), '1.0.0', 'all' );
        wp_enqueue_style( 'fontawesome-solid', get_template_directory_uri() . '/assets/fontawesome/css/solid.css', array(), '1.0.0', 'all' );
        wp_enqueue_style( 'app-styles', get_template_directory_uri() . '/public/css/app.min.css', array(), '1.0.1', 'all' );
    }
    add_action( 'wp_enqueue_scripts', 'enqueue_styles' );
}

//Adding custom WordPress scripts
if( ! function_exists( 'enqueue_scripts' ) )
{
    function enqueue_scripts() 
    {
        wp_enqueue_script( 'bootstrap', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js', array( 'jquery' ), '1.0.1', true );
        wp_enqueue_script( 'app', get_template_directory_uri() . '/public/js/app.min.js', array( 'jquery' ), '1.0.1', true );
    }
    add_action( 'wp_enqueue_scripts', 'enqueue_scripts' );
}

//Adding custom block styles
if( ! function_exists( 'enqueue_block_styles' ) )
{
    function enqueue_block_styles() 
    {
        $styled_blocks = [ 'image', 'cover', 'buttons' ];
        foreach ( $styled_blocks as $block_name ) 
        {
            $args = array(
                'handle' => "block_style-$block_name",
                'src'    => get_theme_file_uri( "public/css/blocks/$block_name.min.css" ),
                $args['path'] = get_theme_file_path( "public/css/blocks/$block_name.min.css" ),
            );
            wp_enqueue_block_style( "core/$block_name", $args );
        }
    }
    add_action( 'after_setup_theme', 'enqueue_block_styles' );
}