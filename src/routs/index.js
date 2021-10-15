import React,{useContext} from "react";
import AppStack from "./appStack"
import Auth from "./auth";
import { AuthContext } from "../contexts/auth";


export default function Routs(){
    const {signed}= useContext(AuthContext);
    return(        
        signed?<Auth/>:<AppStack/>
    )
}

