const VID_PER_ROW = 5;

const renderer = document.getElementsByTagName('ytd-rich-grid-renderer')[0];
renderer.elementsPerRow = VID_PER_ROW;
renderer.reflowContent();
renderer.updateStyles({ '--ytd-rich-grid-items-per-row': VID_PER_ROW });
