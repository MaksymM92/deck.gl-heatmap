import './Header.css';

export const Header = ({toggleWidget}) => {
    return (
        <header>
            <h1>Deck GL + Mapbox heatmap</h1>
            <button onClick={toggleWidget}>Toggle filter</button>
        </header>
    );
};