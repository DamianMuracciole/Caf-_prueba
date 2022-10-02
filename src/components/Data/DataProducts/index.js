import React from 'react';

const DataProducts = (props) => {
  
  let productsObject;
  let cantidadTotalProductos;
  let totalCategory;
  let totalSessions;
  let totalStatus; 

  // console.log(props);
  // console.log(props.meta);
  // console.log(props.productos);
  // console.log(props.productsByCategory);
  // console.log(props.productsBySession);
  // console.log(props.productsByStatus);
  // console.log(props.total);
  
  
    productsObject = props.dataProducts.productos;
    cantidadTotalProductos = props.dataProducts.total;
  if (!props.loadingProducts)  {
    totalCategory = props.dataProducts.productsByCategory.length;
    totalSessions = props.dataProducts.productsBySession.length;
    totalStatus   = props.dataProducts.productsByStatus.length;
    
  }
  return {productsObject, cantidadTotalProductos, totalCategory,totalSessions,totalStatus}
} 

export default DataProducts;