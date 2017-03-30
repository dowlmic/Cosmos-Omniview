const ol = require('openlayers'),
    cesium = require('./lib/cesium'),
    events = require('./lib/events'),
    init = require('./lib/init'),
    ui = require('./lib/ui'),
    locations = require('./lib/locations');

let map = init.map(),
    globe;

function initGlobe() {
    globe = cesium.init('globe', locations.adelaide);
    cesium.sync(map);
    // console.log('Globe: ' + globe);
}

initGlobe();
ui.printMouse('NOT IN MAP', ui.mouseTextId);
