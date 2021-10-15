import React,{useState,useContext} from 'react';
import {Container ,TextLogo , Input1,Textin , Button, Imagen, ButtonGoogle, ButtonCd , TextBtn, ViewIcon} from './styles';
import {useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AuthContext } from "../../contexts/auth";

export default function Register() {

  const [name, setName]= useState("");
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
 
  const navigation = useNavigation();
 
  const {register} = useContext(AuthContext);

  function signed(){

    if(name !== "" && email !== "" && password !== ""){      
      register(name, email, password)
      setName("");
      setEmail("");
      setPassword("");
      return
    }
    alert("preencha todos o campos...")
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <Container >

      <Imagen
             source={require('../../../assets/logo.png')}
      />   

      <TextLogo>Cadastro</TextLogo>      

      <Textin>Nome</Textin>
      <Input1
      placeholder="Digite seu Nome..."
      value={name}
      onChangeText={(text)=>setName(text)}
      />

      <Textin>Email</Textin>
      <Input1
      placeholder="Digite seu email..."
      value={email}
      autoCapitalize='none'
      onChangeText={(text)=>setEmail(text)}
      />

     <Textin>Senha</Textin>
      <Input1
      placeholder="Digite sua senha..."
      value={password}
      secureTextEntry = {true}
      autoCapitalize='none'
      autoCorrect={false}
      onChangeText={(text)=>setPassword(text)}
      />

      <ButtonCd onPress={signed}>
      <TextBtn>Cadastrar</TextBtn>
      </ButtonCd>
          
      
    <Button onPress={()=>{navigation.navigate("Login")}}>
       <TextBtn>Voltar</TextBtn>
    </Button>

  
    </Container>
  );
}

