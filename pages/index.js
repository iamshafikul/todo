import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import {addTodo, deleteTodo, editTodo} from '../action/index'



const index = () => {
   
  const [inputData, setInputData] = useState('');
  const list = useSelector((state)=>state.todoReducer.lists)
  const dispatch = useDispatch();


  if (typeof window !== 'undefined') {
    // Perform localStorage action
    localStorage.setItem('key', JSON.stringify(list));
  }

  
  
  

  return (
    <>
     <div className = 'container'>
       <h1 className = 'title'>TODO LIST</h1>
       <div className = 'inputCon'>
         <input type = 'text' value = {inputData} onChange = {(e)=> setInputData(e.target.value)}/>
         <button onClick = {()=>dispatch(addTodo(inputData), setInputData(''))}>Add</button>
       </div>
       <div className = 'cardCon'>
         {list.map((elem)=>(
           <div key = {elem.id} className = "card">
           <div className = "bCon">
             <button>EDIT</button>
             <button onClick = {()=>dispatch(deleteTodo(elem.id))}>DELETE</button>
           </div>
           <h1 className = "main">{elem.data}</h1>
         </div>
         ))}
         
       </div>
     </div>
    </>
  )
}

export default index
