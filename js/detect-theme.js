/* quick script to detect and update the website colors if the user uses a light theme
 * (yes we use dark theme by default)
*/

// Initial detect
if (window.matchMedia('(prefers-color-scheme-dark').matches) {
	var cssId = "lightTheme";

	if (!document.getElementById(cssId)) {
		const head = document.getElementsByTagName('head')[0];
		const link = document.createElement('link');

		link.id = cddId;
		link.rel = 'stylesheet';
		link.type = 'text/css';
		link.href = '/css/colors-light.css'
		link.media = 'all';
		head.appendChild(link);
	}
}