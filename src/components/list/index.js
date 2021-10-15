import React,{useContext} from 'react';
import { AuthContext } from "../../contexts/auth";
import {Container , Text , TextName,TextDate, ViewUser } from './styles';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function List({data}) {  
  const {user} = useContext(AuthContext);
  return (
    <Container user={data.name===user.name}>

      <ViewUser user={data.name===user.name}>

        <TextName>{data.name}</TextName>
        <Text>{data.message}</Text> 
        <TextDate>{data.date}</TextDate>

    </ViewUser>  

    </Container>
  );
}

