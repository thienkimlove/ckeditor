/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	config.filebrowserBrowseUrl = 'ckeditor/kcfinder/browse.php?opener=ckeditor&type=files';
	config.filebrowserImageBrowseUrl = 'ckeditor/kcfinder/browse.php?opener=ckeditor&type=images';
	config.filebrowserFlashBrowseUrl = 'ckeditor/kcfinder/browse.php?opener=ckeditor&type=flash';
	config.filebrowserUploadUrl = 'ckedtior/kcfinder/upload.php?opener=ckeditor&type=files';
	config.filebrowserImageUploadUrl = 'ckeditor/kcfinder/upload.php?opener=ckeditor&type=images';
	config.filebrowserFlashUploadUrl = 'ckeditor/kcfinder/upload.php?opener=ckeditor&type=flash';
	//do not add extra paragraph to html
	config.autoParagraph = false;
};
