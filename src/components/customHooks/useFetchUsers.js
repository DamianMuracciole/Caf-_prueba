import {useState, useEffect} from "react";

const useFetchUsers = url => {
  const [dataUsers, setDataUsers]       = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
				setDataUsers(data);
        setLoadingUsers(false);
      })
      .catch(error => console.log(error));
    },[url]);
   
    return {dataUsers,loadingUsers};
}

export default useFetchUsers;