import React, { useState, useEffect } from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';
import toolDatas from '../data/data';
import Card from './GaugeCard.js';
const CardList = () => {
  const [gaugeData, setGaugeData] = useState([]);
  const [areaData, setAreaData] = useState([]);
  useEffect(() => {
    const allData = toolDatas;
    setGaugeData(allData.gaugeData);
    setAreaData(allData.areaData);
  }, []);

  return (
    <div className="card-list-container">
      <span className="row">Filters</span>
      <span className="filter_box">
        <ul>
          <li>
            <div className="square-blue"></div>
            <span>ALL CQA Results</span>
            <IoAlertCircleSharp size={20} />
          </li>
          <li>
            <div className="square-grey"></div>
            <span>CQAs with Closed Loop</span>
            <IoAlertCircleSharp size={20} />
          </li>
        </ul>
      </span>
      <div className="gauge-list">
        {Object.values(gaugeData).map((item, index) => {
          return <Card key={index} gauge={item} />;
        })}
      </div>
    </div>
  );
};

export default CardList;
