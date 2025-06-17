import { useEffect, useState } from "react";
import database from './utils/firebaseConfig.js'
import { ref, set, push, get, onValue } from "firebase/database";
function App() { 
  const [text,setText] = useState("")

  function save(){
    messagesRef = ref(database,'test');
    set(messagesRef)
  }

  useEffect(()=>{
    const suscribe = onValue(ref(database,'test'),(snapshot)=>{
      console.log(snapshot)
    })
    return suscribe()
  },[])
  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)}></input>
      <button onClick={(e)=>console.log(text)}></button>
    </div>
  );
}

export default App;
