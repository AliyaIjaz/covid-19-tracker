import React, {useState} from 'react';
import {Pie} from 'react-chartjs-2';


export default function PieChart(props) {
    const data = {
        labels: [
            'Total Cases',
            'Total Recovered',
            'Total Deaths'
        ],
        datasets: [{
            data: [props.tc, props.tr, props.td],
            backgroundColor: [
            'blue',
            'green',
            'red'
            ],
            hoverBackgroundColor: [
            '#36A2EB',
            '#00FFFF',
            '#FF6384'
            
            ]
        }]
    };
   
    return (
      <div>
        <h2>Pie Representation</h2>
        <Pie data={data} />
      </div>
    );
  }
