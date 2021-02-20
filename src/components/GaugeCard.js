import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
const GaugeCard = ({ gauge }) => {
  const { name, score, vsly, sample } = gauge;
  console.log(gauge);
  return (
    <div className="card-container">
      <span className="name">{name}</span>
      <CircularProgressbar
        className="card-circle"
        value={score}
        styles={{
          path: {
            stroke: `rgba(62, 152, 199, ${score / 100})`,
          },
          trail: {
            stroke: '#d6d6d6',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          text: {
            fontSize: '16px',
          },
        }}
      />
      <span className="score">{`${score}%`}</span>
      {!vsly ? (
        <span className="vsly">null</span>
      ) : (
        <span className="vsly">{vsly}</span>
      )}

      <span className="sample">Sample: {sample}</span>
    </div>
  );
};

export default GaugeCard;
