import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function BarGraph(props) {

    const data = {
        labels: ['Coronavirus Cases'],
        datasets: [
          {
            label: 'Total Cases',
            backgroundColor: 'blue',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor:'#36A2EB',
            data: [props.tc]
          },
          {
            label: 'Total Recovered',
            backgroundColor: 'green',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: '#00FFFF',
            data: [props.tr]
          },
          {
            label: 'Total Deaths',
            backgroundColor: 'red',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            data: [props.td]
          }
        ]
      };

    return (
      <div>
        <h2>Bar Representation</h2>
        <Bar
          data={data}
          width={100}
          height={135}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }