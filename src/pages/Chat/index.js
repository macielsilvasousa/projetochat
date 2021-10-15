import React,{useContext, useState, useEffect} from 'react';
import {Container , Text, ChatView, ViewCenter, Input1, InputView, Button, TextChat, FlatView} from './styles';
import Header from "../../components/header/index";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {AuthContext} from "../../contexts/auth";
import firebase from '../../services/connectionFirebase';
import List from "../../components/list/index";
import {AutoScrollFlatList} from "react-native-autoscroll-flatlist";



export default function Chat() {
  const [msn, setMsn] = useState("");
  const [chat, setChat] = useState([]);
  const [bool, setBool] = useState(true);
  const {message, user} = useContext(AuthContext);

  useEffect( ()=>{
    
      function chatProvider(){
         
           firebase.firestore().collection("mensagens").orderBy("date").limitToLast(10).get()
          .then(snapshot=>{   

            setChat([]) ;           
             
              snapshot.forEach((childrenItem)=>{               
                let data = {
                        key: childrenItem.id,
                        message: childrenItem.data().message,
                        name: childrenItem.data().name,
                        date: childrenItem.data().date
                      }
                      setChat(oldArray=>[...oldArray,data])
                      
              })                             
                       
           })
           .catch(err=>{
             console.log("errado"+err)
           })
           
    }
    chatProvider()   
  },[])

  useEffect( ()=>{
   
     function chatProvider(){
        
         firebase.firestore().collection("mensagens").orderBy("date").limitToLast(10).get()
         .then(snapshot=>{  
          
          setChat([]);         
          
             snapshot.forEach((childrenItem)=>{   
             
               let data = {
                       key: childrenItem.id,
                       message: childrenItem.data().message,
                       name: childrenItem.data().name,
                       date: childrenItem.data().date
                       
                     }
                     setChat(oldArray=>[...oldArray,data])
             })                             
                   
          })
          .catch(err=>{
            console.log("errado"+err)
          })
          
   }
   chatProvider()   
 },[bool])  

  function insertMensagen(){
   message(msn)
   setMsn("");
   setBool(!bool)
  }

  return (
    <Container >
        <Header title={"Chat"}/>
      <Text>Chat</Text>

      <ViewCenter>

     <FlatView>
        <AutoScrollFlatList           
            data={chat}
            renderItem={({item})=> <List  data = {item}/>} 
            keyExtractor={item => item.key} 
        />
      </FlatView>  

     

      { console.log("agora =>"+chat)}

      
          <InputView>

            <Input1
              placeholder="Chat" 
              value={msn}      
              onChangeText={(text)=>setMsn(text)}         
              onSubmitEditing={insertMensagen} 
            />

            <Button onPress={insertMensagen}>
            <MaterialCommunityIcons
                name="play"
                size={40}
                color="#FFF"
            />
            </Button>

          </InputView>

      </ViewCenter>      
      
    </Container>
  );
}

