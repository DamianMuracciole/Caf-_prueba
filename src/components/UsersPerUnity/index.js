import React from "react";

function UsersPerUnity({user, loadingUsers}) {

  return(
  <>
    {! loadingUsers && user &&
      <div className="row justify-content-evenly">
        <div className="card-cafeArte text-cafeArte bg-cafeArte mb-3 col-6">
          <div className="card-header-cafeArte">Último usuario</div>
          <div>
            <div className="card-body-cafeArte">{user.name} {user.lastName}</div>
            <div className="card-body-cafeArte "> {user.email}</div>
            <img className="w-25 rounded-3 mb-3" src={user.image} alt='imagen del producto'></img>
          </div>
        </div>
      </div>
    }
  </>
  )
}

export default UsersPerUnity