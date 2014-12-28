/**
 * @file
 * HERE Maps processor.
 */

(function ($) {
  Drupal.behaviors.here_maps_formatter = {};

  Drupal.behaviors.here_maps_formatter.attach = function (context, settings) {
    var mapFeatures;

    if (typeof Drupal.settings.here_maps_formatter != 'undefined') {
      mapFeatures = Drupal.settings.here_maps_formatter.features;
    }

    var latitude = mapFeatures.lat;
    var longitude = mapFeatures.lon;

    // Initialize the platform object:
    var platform = new H.service.Platform({
      'app_id': 'DemoAppId01082013GAL',
      'app_code': 'AJKnXv84fjrb0KIHawS0Tg',
      useCIT: true
    });

    // Obtain the default map types from the platform object.
    var maptypes = platform.createDefaultLayers();

    var mapContainer = document.getElementById('here-maps');
    var mapZoom = mapContainer.getAttribute('data-zoom');

    console.log(typeof mapZoom);

    // Instantiate (and display) a map object:
    var map = new H.Map(
      mapContainer,
      maptypes.normal.map,
      {
        zoom: Number(mapZoom),
        center: { lat: latitude, lng: longitude }
      }
    );

    // Activate map behaviors/events.
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

    // Create the default UI components
    var ui = H.ui.UI.createDefault(map, maptypes);

    var marker = new H.map.Marker({lat: latitude, lng: longitude});
    map.addObject(marker);
  }
})(jQuery);
