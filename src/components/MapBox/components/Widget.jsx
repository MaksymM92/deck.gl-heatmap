import { useState } from "react";
import { DEFAULT_FILTER_VAlUES } from "../constants";
import './Widget.css';

export const Widget = ({handleUpdateLayers, handleMapDataChange}) => {
    const [inputValues, setInputValues] = useState({...DEFAULT_FILTER_VAlUES})

    const handleInputsChange = (event, type) => {
        inputValues[type] = +event.target.value;
        const updatedValues = inputValues;
        setInputValues(updatedValues);
        handleUpdateLayers(inputValues);
    }

    const handleDataChange = (event) => {
        handleMapDataChange(event.target.value);
    }

    return (
        <div className="map-widget">
            <div>
                <h3>Change heatmap view</h3>
            </div>
            <div className="map-widget-select">
                <label htmlFor="data-set">Data set</label>
                <select name="data-set" id="data-set" onChange={(event) => handleDataChange(event)}>
                    <option value="default">Default</option>
                    <option value="earthquakes">Earthquakes</option>
                </select>
            </div>
            <div className="map-widget-select">
                <label htmlFor="intensity">Intensity</label>
                <select name="intensity" id="intensity" onChange={(event) => handleInputsChange(event, 'intensity')}>
                    <option value={2}>Default</option>
                    <option value={1}>Low</option>
                    <option value={5}>Medium</option>
                    <option value={10}>High</option>
                </select>
            </div>
            <div className="map-widget-select">
                <label htmlFor="radius">Radius</label>
                <select name="radius" id="radius" onChange={(event) => handleInputsChange(event, 'radiusPixels')}>
                    <option value={30}>Default</option>
                    <option value={5}>Low</option>
                    <option value={20}>Medium</option>
                    <option value={50}>High</option>
                </select>
            </div>
            <div className="map-widget-select">
                <label htmlFor="threshold">Threshold</label>
                <select name="threshold" id="threshold" onChange={(event) => handleInputsChange(event, 'threshold')}>
                    <option value={0.03}>Default</option>
                    <option value={0.2}>Low</option>
                    <option value={0.5}>Medium</option>
                    <option value={1}>High</option>
                </select>
            </div>
        </div>
    )
}