import React from 'react'
import {Redirect,Route} from 'react-router-dom';


const ProtectedRoutes=({auth,component:Component,...rest}) =>{
   
  return (
    <Route {...rest} render={(props)=>{
        if(auth) return <Component {...props} />;
        if(!auth) return <Redirect to={{path:"/login",state:{from:props.location}}} />;
    }}
    />
  )

}

export default ProtectedRoutes