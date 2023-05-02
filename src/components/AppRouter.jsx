import React, { useContext } from "react";
import {Routes, Route} from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes";
import { useSelector } from "react-redux";

const AppRouter=()=>{
    const users=useSelector((state)=>state.users)
    return(
        
            <Routes>
                {users.isAuth && authRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={<Component/>} />
                )}
                {publicRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={<Component/>} />
                )}
            </Routes>
         
    );
}

export default AppRouter;