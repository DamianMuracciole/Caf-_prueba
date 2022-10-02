import React from 'react';

const DataUsers = (props) => {
  //dataUsers,loadingUsers
  //console.log(dataUsers);

  const cantidadTotalUsuarios = props.dataUsers.total;
  return {cantidadTotalUsuarios}
} 

export default DataUsers;