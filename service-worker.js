importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js');
/*save all the files */
workbox.routing.registerRoute(
	({request}) => request.destination === 'script',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'style',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'document',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'font',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'audio',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'video',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'manifest',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'document',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'font',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'audio',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'video',
	new workbox.strategies.CacheFirst()
	
);

workbox.routing.registerRoute(
	({request}) => request.destination === 'manifest',
	new workbox.strategies.CacheFirst()
);
