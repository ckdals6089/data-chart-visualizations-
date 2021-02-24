import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import toolDatas from '../data/data';
import Navigation from './commons/Navigation';
import SideBar from './commons/SideBar';
import Header from './commons/Header';
import GaugeCardList from './GaugeCardList';
import Area from './Area';

function App() {
  const [gaugeData, setGaugeData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('Basics');
  useEffect(() => {
    const allData = toolDatas;
    setGaugeData(allData.gaugeData);
    setAreaData(allData.areaData);
  }, []);
  return (
    <div className="App">
      <Navigation />
      <SideBar />
      <Header />
      <div className="main-page">
        <GaugeCardList
          gaugeData={gaugeData}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
        <Area areaData={areaData[selectedItem]} selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default App;
