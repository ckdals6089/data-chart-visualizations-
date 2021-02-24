import React from 'react';
import { IoAlertCircleSharp } from 'react-icons/io5';
import GaugeCard from './GaugeCard.js';
const GaugeCardList = ({ gaugeData, setSelectedItem }) => {
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
      {/* Mapping GaugeData Cards */}
      <div className="gauge-list">
        {gaugeData.map((item, index) => {
          return (
            <GaugeCard
              id={index}
              key={index}
              gauge={item}
              onSelectedItem={() => setSelectedItem(item.name)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GaugeCardList;
