import React,{ useState,useEffect }from 'react';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './Firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const[input, setInput] = useState('');
  const[messages,setMessages] = useState([
  
    ]);
  const[username,setUsername] = useState('');
  useEffect(()=>{
    //runs once when the app gets loaded
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  },[])
  useEffect(()=> {
      setUsername(prompt('enter your username'))
  },[])
  const sendmessage=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      text: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    
    setInput('');

  }
  return (
    <div className="App">
      <img src="data:image/png;base64,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"/>
      <h1> hi programmer </h1>
      <h2>welcome {username} </h2>
     <form className="App__form">
      <FormControl className="App__formcontrol">
        <InputLabel >Enter a message...</InputLabel>
        <Input className="App__input" value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className="App__iconbutton" disabled={!input} variant="contained" color="primary" type='Submit' onClick={sendmessage} >
          <SendIcon />
        </IconButton>
      </FormControl>
      </form>
      {
        messages.map(message =>(
          <Message username= {username} message={message}/>

          
        ))
      }
    </div>
  );
}

export default App;
