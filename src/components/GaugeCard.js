import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const GaugeCard = ({ gauge }) => {
  const { name, score, vsly, sample } = gauge;
  return (
    <div className="card-container">
      <span>{name}</span>
      <span className="score">{score}</span>
      <span>Sample: {sample}</span>
    </div>
  );
};

export default GaugeCard;
