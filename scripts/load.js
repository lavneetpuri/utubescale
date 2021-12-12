function loadScript(url) {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  return new Promise((resolve) => {
    script.onload = resolve;
  });
}

addEventListener('load', loadScript.bind(null, chrome.runtime.getURL('scripts/reset-layout.js')));
