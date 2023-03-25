import {useState} from "react";
import {Header} from "./components/Header";
import {Heatmap} from "./components/MapBox";
import './App.css';

function App() {
  const [showWidget, setShowWidget] = useState(false);

  const handleWidgetToggle = () => {
      setShowWidget(prev => !prev);
  }

  return (
      <div className="App">
          <Header toggleWidget={handleWidgetToggle}/>
          <Heatmap showWidget={showWidget}/>
      </div>
  );
}

export default App;
