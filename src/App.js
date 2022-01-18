import './App.css';
import React,{useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import { FormControl,InputLabel,Input } from '@mui/material';
import { Message } from './message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
function App() {
  const [input,setinput]=useState("")
  const [message,setmessage]=useState([]) 

  console.log(message)

  const[userName,setname]=useState("")
  //for displaying data which is already present in database
  //orderBy('timestamp', 'desc')
  //orderBy('timestamp', 'asc')
  useEffect(() => {
   db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
     setmessage(snapshot.docs.map(doc=>({id: doc.id , data: doc.data()})))
   })
  }, [])

  useEffect(() => {
    setname(prompt("Enter your name"))
  }, [])
  const sendmessage= (e)=>{
    e.preventDefault();
    if(input)
    {
      //for adding data to firebase
      db.collection('messages').add({
        input: input,
        userName: userName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      setinput("")
    }
    
  }
  return (
    <div className="App">
    <img className="imgg" src="data:image/png;base64,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" alt="" />
      <h1>Facebook Messenger</h1>
      <h2>Welcome {userName}</h2>
      <form className="app" action="">
      <FormControl className="control">
      {/* <InputLabel >Enter messsage...</InputLabel> */}
      <Input className="input" type="text" placeholder="Enter Message.." value={input}  onChange={e=>setinput(e.target.value)}/>
      {/* <Button type="submit" variant="contained" onClick={sendmessage}>Send message</Button> */}

      {/* <input type="text" value={input} placeholder="Enter message" onChange={e=>setinput(e.target.value)} /> */}
      
      <IconButton 
         type="submit" className="button" variant="contained" onClick={sendmessage}
      >
        <SendIcon />
        </IconButton>
        </FormControl>
      </form>
      {message.map(msg=>(
        <Message 
          key={msg.id}
          userName={userName}
          name={msg.data.userName}
          text={msg.data.input}
        />
      ))}
    </div>
  );
}

export default App;
