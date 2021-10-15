import React,{useState,useContext}from 'react';
import {ActivityIndicator} from "react-native"
import {Container , Text , Input1 , Button ,
   Imagen , ButtonRg , TextRg, ContainerLogin,
    ButtonGoogle , TextBtn, ViewIcon } from './styles';
import {useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

export default function Login() {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const navigation = useNavigation();
  const {logIn} = useContext(AuthContext);

  function login(){
    logIn(email,password)
    setEmail("")
    setPassword("")
  }

  return (
   
    <Container >

    <ContainerLogin>       
      

            <Imagen
                    source={require('../../../assets/logo.png')}
            />

            <Input1
               placeholder="Digite seu email..."
               value={email}
               autoCapitalize='none'
               onChangeText={(text)=>setEmail(text)}
            />

            <Input1
               placeholder="digite sua senha..."
               value={password}
               secureTextEntry = {true}
               autoCapitalize='none'
               autoCorrect={false}
               onChangeText={(text)=>setPassword(text)}
            />
            
            <Button onPress={login}>
              <Text>Entrar</Text>
            </Button>

    </ContainerLogin>

    <TextBtn>ou</TextBtn> 

    <ButtonGoogle >

          <ViewIcon>

            <MaterialCommunityIcons
                name="google-plus"
                size={20}
                color="#8B0000"
            />
          </ViewIcon>  
          <TextBtn>Conta Google</TextBtn>

      </ButtonGoogle>

    <ButtonRg onPress={()=>{navigation.navigate("Register")}}>
       <TextRg>Cadastrar-se</TextRg>
    </ButtonRg>
  
    </Container>
  );
}

