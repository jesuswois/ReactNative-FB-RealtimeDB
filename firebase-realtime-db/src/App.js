import { useEffect, useState } from "react";
import database from './utils/firebaseConfig.js'
import { ref, set, push, get, onValue } from "firebase/database";
function App() {

  const [current, setCurrent] = useState("")
  const [text, setText] = useState("")

  function save() {
    set(ref(database, 'test/current'), { message: text })
  }

  useEffect(() => {
    const suscribe = onValue(ref(database, 'test'), (snapshot) => {
      console.log(snapshot.val())
      setCurrent(JSON.stringify(snapshot.val()))
    })
    return () => suscribe()
  }, [])
  return (
    <div>
      <p>Current Text: {current}</p>
      <div style={{ display: "flex", flexDirection:"column", width:"fit-content"}}>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={()=>save()} style={{width:"fit-content",alignSelf:"center",marginTop:15,fontSize:15}}>Enviar</button>
      </div>
    </div>
  );
}

export default App;
