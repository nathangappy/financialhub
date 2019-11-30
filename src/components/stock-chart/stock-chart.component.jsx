import React, { Component } from 'react';

import Chart from 'chart.js';

import './stock-chart.styles.scss';

class StockChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const ctx = this.chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.props.labels,
        datasets: [
          {
            data: this.props.data,
            fill: false,
            borderColor: this.props.status === 'positive' ? 'green' : 'red'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    });
  }
  render() {
    console.log(this.props.data);
    return (
      <div className='stock-chart'>
        <canvas id='myChart' ref={this.chartRef} height='300'></canvas>
      </div>
    );
  }
}

export default StockChart;
