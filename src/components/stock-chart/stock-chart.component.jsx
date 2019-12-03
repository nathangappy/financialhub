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
    return (
      <div className='stock-chart'>
        <canvas
          id='myChart'
          ref={this.chartRef}
          height='300'
          aria-label='Hello ARIA World'
          role='img'
        >
          <p>Hello Aria. The Chart seems to be malfunctioning</p>
        </canvas>
      </div>
    );
  }
}

export default StockChart;
