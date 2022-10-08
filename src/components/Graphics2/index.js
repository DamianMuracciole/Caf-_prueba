import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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
        label: title,
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

  // if (products){
  //   const cafeMolido = products.filter(product => product.category === "Molido");
  //   const granos = products.filter(product => product.category === "En Granos");
  //   const capsulas = products.filter(product => product.category === "Capsulas");
  //   const alfajores = products.filter(product => product.category === "Alfajores");
  //   const chocolates = products.filter(product => product.category === "Chocolates");
  //   const cookies = products.filter(product => product.category === "Cookies");
  //   const enVenta = products.filter(product => product.status === "A");
  //   const destacado = enVenta.filter(product => product.session === "Destacado");
  //   const oferta = enVenta.filter(product => product.session === "Oferta");
  //   const normal= enVenta.filter(product => product.session === "Normal");
  //   data.datasets.data = [cafeMolido.length, granos.length, capsulas.length, alfajores.length, chocolates.length, cookies.length];
  //   data.labels = ['cafeMolido', 'granos', 'capsulas', 'alfajores', 'chocolates', 'cookies']
  //   data2.datasets.data = [enVenta.length, products.length - enVenta.length];
  //   data2.labels = ['En Venta','Descartado'];

  //   data5.datasets.data = [26, 4, 26];
  //   //data3.datasets.data = [destacado.length, oferta.length, normal.length];
  //   data5.labels = ['Destacado','En Oferta','Sin destacar'];
  //   console.log(products)
   
  // }
 
  
  return(
    <>
      <h5>{title}</h5>
      <Doughnut data={data} />
    </>
  )
}

export default Graphics;
