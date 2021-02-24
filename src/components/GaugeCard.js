import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const GaugeCard = ({ gauge, onSelectedItem }) => {
  const { name, score, vsly, sample } = gauge;
  return (
    <div className="card-container" id={name} onClick={onSelectedItem}>
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
      <span className="vsly">{vsly || 'null'}</span>
      <span className="sample">Sample: {sample}</span>
    </div>
  );
};

export default GaugeCard;
