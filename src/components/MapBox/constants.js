import {mapDummyData} from "./mapData";

export const API_KEY = 'YOUR_KEY';

export const INITIAL_VIEW_STATE = {
    longitude: -73.75,
    latitude: 40.73,
    zoom: 9,
    maxZoom: 16,
    pitch: 0,
    bearing: 0
};

export const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

export const DEFAULT_LAYER_VALUES = {
    id: 'heatmap-layer',
    pickable: false,
    getPosition: d => [d[0], d[1]],
    getWeight: d => d[2],
}

export const DEFAULT_FILTER_VAlUES = {
    intensity: 2,
    threshold: 0.03,
    radiusPixels: 30,
}

export const MAP_DATA = {
    default: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/screen-grid/uber-pickup-locations.json',
    earthquakes: mapDummyData,
}