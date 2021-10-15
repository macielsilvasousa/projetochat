import React,{useContext} from 'react';
import {Container , Text , Button , Button2} from './styles';
import { Feather } from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import { AuthContext } from "../../contexts/auth";

export default function Header({title}) {

    const navigation = useNavigation();
    const {user,LogOut} = useContext(AuthContext);
  return (
    <Container >
      
        <Button
        onPress={()=>{navigation.openDrawer()}}
        >
           <Feather name="menu" size={35} color="#FFF"/>           
        </Button> 

        <Text>{user.name}</Text>

        <Button2
        onPress={LogOut}
        >
           <Feather name="delete" size={35} color="#FFF"/>           
        </Button2>        
  
    </Container>
  );
}

