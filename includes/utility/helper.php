<?php

declare( strict_types=1 );

namespace Blockify\Plugin;

use function apply_filters;
use function basename;
use function dirname;
use function file_exists;
use function file_get_contents;
use function get_template_directory;
use function get_template_directory_uri;
use function glob;
use function is_plugin_active;
use function ltrim;
use function plugin_dir_path;
use function plugin_dir_url;
use function str_contains;
use function trailingslashit;
use function wp_get_global_settings;
use const DIRECTORY_SEPARATOR;

/**
 * Checks if installed in a plugin or theme.
 *
 * @since 1.0.0
 *
 * @return bool
 */
function is_plugin(): bool {
	if ( ! function_exists( 'is_plugin_active' ) ) {
		include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	}

	return is_plugin_active( 'blockify/blockify.php' );
}

/**
 * Description of expected behavior.
 *
 * @since 1.0.0
 *
 * @param string $file
 *
 * @return string
 */
function get_framework_dir( string $file = '' ): string {
	$file = untrailingslashit( ltrim( $file, DIRECTORY_SEPARATOR ) );
	$dir  = get_template_directory() . "/vendor/blockify/plugin";

	if ( is_plugin() ) {
		$dir = plugin_dir_path( dirname( __DIR__ ) . '/blockify.php' );
	}

	$dir .= DIRECTORY_SEPARATOR . $file;

	if ( $file && ! str_contains( basename( $file ), '.' ) ) {
		$dir .= DIRECTORY_SEPARATOR;
	}

	return $dir;
}

/**
 * Description of expected behavior.
 *
 * @since 1.0.0
 *
 * @param string $file
 *
 * @return string
 */
function get_framework_url( string $file = '' ): string {
	$file = untrailingslashit( ltrim( $file, DIRECTORY_SEPARATOR ) );
	$url  = get_template_directory_uri() . "/vendor/blockify/plugin";

	if ( is_plugin() ) {
		return plugin_dir_url( dirname( __DIR__ ) . '/blockify.php' );
	}

	$url .= DIRECTORY_SEPARATOR . $file;

	if ( $file && ! str_contains( basename( $file ), '.' ) ) {
		$url .= DIRECTORY_SEPARATOR;
	}

	return $url;
}

/**
 * Returns the path to the styles library.
 *
 * @since 0.2.0
 *
 * @return string
 */
function get_valid_style_variations(): array {
	$style_variations = [];

	foreach ( glob( get_framework_dir( 'styles/*.json' ) ) as $file ) {
		$style_variations[] = basename( $file, '.json' );
	}

	return $style_variations;
}

/**
 * Description of expected behavior.
 *
 * @since 1.0.0
 *
 * @return string
 */
function get_pattern_dir(): string {
	return trailingslashit( apply_filters(
		'blockify_pattern_dir',
		get_template_directory() . DIRECTORY_SEPARATOR . 'patterns'
	) );
}

/**
 * Attempts to detect the active style variation.
 *
 * Requires a color palette and a background color set in theme.json.
 *
 * @since 0.2.0
 *
 * @return void
 */
function get_style_variation(): string {
	return wp_get_global_settings()['custom']['styleVariation'] ?? 'default';
}

/**
 * Returns default icon in case svg is missing.
 *
 * @since 1.0.0
 *
 * @return string
 */
function get_default_icon(): string {
	$file = get_framework_dir( 'assets/svg/social/blockify.svg' );

	if ( file_exists( $file ) ) {
		return file_get_contents( $file );
	} else {
		return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 25"><path d="M11.258 2.017 C 10.746 2.162,10.691 2.192,6.220 4.750 C 5.010 5.443,3.858 6.105,3.660 6.221 C 3.269 6.451,2.763 6.875,2.499 7.193 C 2.282 7.454,2.088 8.025,2.034 8.562 C 2.011 8.795,2.001 10.643,2.010 13.204 C 2.026 17.969,2.005 17.632,2.321 18.236 C 2.521 18.617,2.835 19.006,3.120 19.225 C 3.370 19.418,4.051 19.817,7.360 21.710 C 10.270 23.375,10.848 23.687,11.296 23.839 C 11.817 24.015,11.971 24.026,12.408 23.918 C 12.933 23.789,13.750 23.363,16.600 21.733 C 19.850 19.873,20.625 19.420,20.871 19.234 C 21.138 19.034,21.522 18.553,21.703 18.193 C 21.997 17.610,21.980 17.935,21.980 12.900 L 21.980 8.380 21.867 8.000 C 21.711 7.476,21.594 7.280,21.200 6.878 C 20.817 6.487,20.891 6.531,16.360 3.940 C 12.761 1.881,13.010 1.995,12.060 1.974 C 11.628 1.964,11.404 1.976,11.258 2.017 M12.460 3.994 C 12.708 4.112,16.127 6.060,17.913 7.100 C 18.738 7.580,18.917 7.700,18.873 7.740 C 18.783 7.824,14.712 10.171,12.771 11.257 L 12.001 11.688 11.371 11.337 C 9.925 10.534,5.440 7.949,5.157 7.756 C 5.065 7.693,5.068 7.690,5.522 7.422 C 6.715 6.717,11.008 4.284,11.620 3.967 C 11.859 3.842,12.162 3.852,12.460 3.994 M19.995 13.784 C 19.998 14.996,19.989 16.292,19.975 16.664 L 19.949 17.340 19.745 17.541 C 19.499 17.782,18.879 18.158,16.400 19.568 C 13.439 21.253,13.085 21.448,13.041 21.421 C 13.013 21.403,13.000 20.129,13.000 17.448 L 13.001 13.500 16.470 11.469 L 19.940 9.439 19.965 10.509 C 19.978 11.098,19.992 12.572,19.995 13.784 " fill="currentColor" stroke="none" fill-rule="evenodd"></path></svg>';
	}
}
