import React from 'react';
import AreaChart from './AreaChart';

const Area = ({ areaData, selectedItem }) => {
  console.log(areaData);
  return (
    <div className="area-chart-container">
      <div className="area-chart-header">
        <span>{selectedItem} TREND</span>
        <ul>
          <li>Day</li>
          <li>Week</li>
          <li>Month</li>
          <li>Quarter</li>
          <li>Half</li>
          <li>Year</li>
        </ul>
      </div>
      <div>
        <AreaChart areaData={areaData} />
      </div>
    </div>
  );
};

export default Area;
