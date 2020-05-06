/**
 * JS Script used to override youtube layout.
 * Appends a style tag to DOM to apply the overrides.
 */

(()=> {
// Tweak the following based on your screen size to
// adjust the videos thumbnail size on the homepage.
// The layout is responsive, so small width will automatically put more videos per row.
let thumbnailWidth = '200px';
let layoutOverride =
// Makes global font smaller
  `html { font-size: 9px !important }` +
  `ytd-rich-item-renderer { width: ${thumbnailWidth} }
  ytd-rich-grid-video-renderer { min-width: ${thumbnailWidth} }` +
// Remove the channel icon under every video to make of the title text visible.
  `#avatar.ytd-rich-grid-video-renderer { display: none }`;

// Create and append style tag to the html DOM
let head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
head.appendChild(style);
style.appendChild(document.createTextNode(layoutOverride));
})()
