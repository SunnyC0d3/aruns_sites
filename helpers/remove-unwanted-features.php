<?php

/**
 * This file initialises image sizes.
 *
 * @author     Sukhwinder Singh <s.sunny_1995@hotmail.co.uk>
 * @version    1.0.0
 */

//Removes WordPress meta information
if( ! function_exists( 'wpb_remove_version' ) )
{
    function wpb_remove_version() 
    {
        return '';
    }
    add_filter( 'the_generator', 'wpb_remove_version' );
}

//Removes comments post type
if( ! function_exists( 'remove_comments_menu' ) )
{
    function remove_comments_menu() 
    {
        remove_menu_page( 'edit-comments.php' );
    }
    add_action( 'admin_menu', 'remove_comments_menu' );
}

//This removes the options-media.php page on the Admin side
if( ! function_exists( 'remove_media_options_page' ) )
{
    function remove_media_options_page() 
    {
        remove_submenu_page( 'options-general.php', 'options-media.php' );
    }
    add_action( 'admin_menu', 'remove_media_options_page' );
}

//This removes the post post-type page on the Admin side
if( ! function_exists( 'remove_posts_post_type' ) )
{
    function remove_posts_post_type( $args, $postType ) 
    {
        if ($postType === 'post') {
            $args['public']                = false;
            $args['show_ui']               = false;
            $args['show_in_menu']          = false;
            $args['show_in_admin_bar']     = false;
            $args['show_in_nav_menus']     = false;
            $args['can_export']            = false;
            $args['has_archive']           = false;
            $args['exclude_from_search']   = true;
            $args['publicly_queryable']    = false;
            $args['show_in_rest']          = false;
        }
    
        return $args;
    }
    add_filter('register_post_type_args', 'remove_posts_post_type', 0, 2);
}

//Disable REST API
add_filter( 'json_enabled', '__return_false' );
add_filter( 'json_jsonp_enabled', '__return_false' );
