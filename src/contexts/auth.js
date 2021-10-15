import React,{createContext, useState, useEffect} from 'react';
import firebase from "../services/connectionFirebase";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user,setUser] = useState(null);
    
    useEffect(()=>{
     async function loadStorage(){
       const storageUser = await AsyncStorage.getItem("Auth_user");

       if(storageUser){
         setUser(JSON.parse(storageUser));
       }
     }
     loadStorage()
          
    },[])
    

    //Cadastrar com email
    
    async function register( name,email,password){

      await firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(async (data)=>{      

      await firebase.firestore().collection("user").doc(data.user.uid).set({
          uid: data.user.uid,
          name: name,
          email: email
       })
       const dat={
        uid: data.user.uid,
        name: name,
        email: email
     }
       setUser(dat);
       storage(dat);
      }).catch((err)=>{        
      
        if(err+"" === 'Error: The email address is badly formatted.'){
          return alert('O endereço de e-mail está formatado incorretamente!');
         }
         if(err+"" === 'Error: Password should be at least 6 characters'){
           return alert('A senha deve ter pelo menos 6 caracteres!');
          }
          if(err+"" === 'Error: The email address is already in use by another account.'){
           return alert('O endereço de e-mail já está sendo usado por outra conta!');
          }

        alert('Ops parece que deu algum erro.');
        return;
      })      
    }
 
    //loging com email

    async function logIn(email,password){

     await firebase.auth().signInWithEmailAndPassword(email,password)
      .then(( data)=>{  

            firebase.firestore().collection("user").doc(data.user.uid).get()
            .then(snapshot=>{       
              
                const dat={
                  uid: data.user.uid,
                  name: snapshot.data().name,
                  email: snapshot.data().email
                }
                setUser(dat)
                storage(dat)             
                
            })
            .catch(err=>{
              console.log("errado"+err)
            })      
     
      }).catch((err)=>{

        if(err+"" === 'Error: The email address is badly formatted.'){
          return alert('O endereço de e-mail está formatado incorretamente!');
         }
         if(err+"" === 'Error: The password is invalid or the user does not have a password.'){
           return alert('a senha é inválida ou o usuário não possui uma senha!');
          }
         
        alert('Ops parece que deu algum erro.');
        return;
      })  
    } 

    //Adicionar ao AsyncStorage

    async function storage(data){
      await AsyncStorage.setItem("Auth_user", JSON.stringify(data))
    }

    //Deslogar do app

    async function LogOut(){
      await firebase.auth().signOut();
      await AsyncStorage.clear()
      .then(()=>{setUser(null)});      
    }

    //Salvando mensagens

    async function message(messagen){       

      await firebase.firestore().collection("mensagens").doc().set({
        uid : user.uid,
        name: user.name,
        message: messagen,         
        date: new Date().toLocaleString()        
      }) 
          
    }   
   
  return (
   <AuthContext.Provider  value={{signed: !!user,register, user , LogOut , logIn , message}}>

       {children}

   </AuthContext.Provider>  
  )
}

