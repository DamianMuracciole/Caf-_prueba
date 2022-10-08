const DataProducts = ({dataProducts, loadingProducts}) => {
  
  let productsDetails;
  let totalProducts;
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
  
  
    productsDetails = dataProducts.productos;
    totalProducts = dataProducts.total;
  if (!loadingProducts)  {
    totalCategory = dataProducts.productsByCategory.length;
    totalSessions = dataProducts.productsBySession.length;
    totalStatus   = dataProducts.productsByStatus.length;
    
  }
  return {productsDetails, totalProducts, totalCategory,totalSessions,totalStatus}
} 

export default DataProducts;