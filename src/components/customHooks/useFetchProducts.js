import {useState, useEffect} from "react";

const useFetchProducts = url => {
  const [dataProducts, setDataProducts]       = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
				setDataProducts(data);
        setLoadingProducts(false);
      })
      .catch(error => console.log(error));
    },[url]);
    return {dataProducts,loadingProducts};
}

export default useFetchProducts;