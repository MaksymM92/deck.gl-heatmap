import { useState } from "react";
import DeckGL from "@deck.gl/react";
import { Map } from 'react-map-gl';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Widget } from "./components";
import {
    API_KEY,
    DEFAULT_FILTER_VAlUES,
    DEFAULT_LAYER_VALUES,
    INITIAL_VIEW_STATE,
    MAP_DATA,
    MAP_STYLE
} from './constants';

export const Heatmap = ({ showWidget = false }) => {
    const [selectedMapData, setSelectedMapData] = useState(MAP_DATA['default']);

    const initialLayer = new HeatmapLayer({
        data: selectedMapData,
        ...DEFAULT_LAYER_VALUES,
        ...DEFAULT_FILTER_VAlUES
    })

    const [layers, setLayers] = useState([initialLayer]);

    const handleLayers = (values) => {
        const newLayer = new HeatmapLayer({
            data: selectedMapData,
            ...DEFAULT_LAYER_VALUES,
            ...values,
        });
        setLayers([newLayer]);
    }

    const handleMapDataChange = (selectedMap) => {
        setSelectedMapData(MAP_DATA[selectedMap]);
        const newLayer = new HeatmapLayer({
            data: MAP_DATA[selectedMap],
            ...DEFAULT_LAYER_VALUES,
            ...layers,
        });
        setLayers([newLayer]);
    }

    return (
        <>
            {showWidget && <Widget handleUpdateLayers={handleLayers} handleMapDataChange={handleMapDataChange}/>}
            <DeckGL initialViewState={INITIAL_VIEW_STATE} controller={true} layers={layers}>
                <Map reuseMaps mapboxAccessToken={API_KEY} mapStyle={MAP_STYLE} preventStyleDiffing={true} />
            </DeckGL>
        </>
    )
}