if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/micro-guide-ux/sw.js', { scope: '/micro-guide-ux/' })})}