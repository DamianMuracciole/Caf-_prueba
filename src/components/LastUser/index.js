import React from "react";
import UsersPerUnity from '../UsersPerUnity';

function LastUser({users, loadingUsers}){
  let lastUser = {};
  if (!loadingUsers) lastUser = users[users.length - 1];
  return(
    <>
      { !loadingUsers && lastUser &&
      <>
        <UsersPerUnity
          user        = {lastUser}
          loadingUsers = {loadingUsers}
        />
      </>
      }

      { loadingUsers && 
        <> Cargando ..... </>
      }
    </>
  )
}

export default LastUser