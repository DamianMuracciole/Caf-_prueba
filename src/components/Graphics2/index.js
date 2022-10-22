import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// color: rgba(250, 243, 224, 1);
// color: rgba(204, 150, 69, 1);
// color: rgba(84, 46, 25, 1);
// color:rgba(54, 21, 0, 1);
// color: rgba(28, 10, 0, 1);
// color: rgba(119, 64, 34, 1);


function Graphics ({title, total, datos}){
  let datos1 = datos.map(dato => Object.keys(dato));
  const claves = datos1.map((dato,i) => dato[0]);
  const valores = datos.map(dato => Object.values(dato));
  const data = {
    labels: claves,
    datasets: [
      {
        data: valores,
        backgroundColor: [
          'rgba(250, 243, 224, 0.95)',
          'rgba(204, 150, 69, 0.95)',
          'rgba(119, 64, 34, 0.95)',
          'rgba(84, 46, 25, 0.95)',
          'rgba(54, 21, 0, 0.95)',
          'rgba(28, 10, 0, 0.95)',
        ],
        borderColor: [
          'rgba(250, 243, 224, 1)',
          'rgba(204, 150, 69, 1)',
          'rgba(119, 64, 34, 1)',
          'rgba(84, 46, 25, 1)',
          'rgba(54, 21, 0, 1)',
          'rgba(28, 10, 0, 1)',
          
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: title,
        color: 'rgba(28, 10, 0, 1)',
        font: {size: 22,family: 'Poppins',weight: 500},
        fullSize: true
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
     }
    }
  }
  
  return(
    <>
      {/* <h5>{title}</h5> */}
      <hr />
      <Doughnut 
        data={data} 
        options={options}
      />
      
    </>
  )
}

export default Graphics;
