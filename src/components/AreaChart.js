import React, { useEffect } from 'react';
import * as d3 from 'd3';

const AreaChart = ({ areaData }) => {
  useEffect(() => {
    d3.select('.area-chart svg').remove();
    if (areaData) {
      const data = areaData;
      for (let i = 0; i < data.length; i++) {
        data[i].x = i;
      }
      const margin = { top: 0, right: 40, bottom: 35, left: 20 };
      const width = 700 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const x = d3
        .scaleLinear()
        .domain([0, data.length - 1])
        .range([0, width]);

      const y = d3.scaleLinear().domain([0, 100]).range([height, 0]);

      const svg = d3
        .select('.area-chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

      const area = d3
        .area()
        .x(d => x(d.x))
        .y0(height)
        .y1(d => y(d.score))
        .curve(d3.curveCardinal);

      // Drowing Area
      svg
        .append('path')
        .datum(data)
        .attr('class', 'area-chart-zone')
        .attr('fill', '#0071c5')
        .attr('d', area);

      // Drowing a graph
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#0071c5')
        .attr('stroke-width', 5)
        .attr(
          'd',
          d3
            .line()
            .x(d => x(d.x))
            .y(d => y(d.score))
            .curve(d3.curveCardinal)
        );

      // Creates the x-axis
      svg
        .append('g')
        .attr('class', 'area-chart-axis-x')
        .attr('transform', 'translate(0,' + (height + 15) + ')')
        .call(
          d3
            .axisBottom(x)
            .ticks(4)
            .tickSizeOuter(0)
            .tickFormat((d, i) => data[i].date)
        );

      // Drowing points dot
      svg
        .selectAll('.area-chart-pointsDot')
        .data(data)
        .enter()
        .append('circle')
        .attr('fill', '#0071c5')
        .attr('stroke', '#fff')
        .attr('stroke-width', 4)
        .attr('cx', d => x(d.x))
        .attr('cy', d => y(d.score))
        .attr('r', 10);

      // Creates point dot label
      svg
        .selectAll('.area-chart-label')
        .data(data)
        .enter()
        .append('text')
        .style('text-anchor', 'middle')
        .attr('fill', '#5e5e5e')
        .attr('font-size', 16)
        .attr('transform', 'translate(0, -25)')
        .attr('x', d => x(d.x))
        .attr('y', d => y(d.score))
        .text(d => d.score + '%');
    }
  }, [areaData]);
  return (
    <div className="area-chart">
      <svg />
    </div>
  );
};
export default AreaChart;
