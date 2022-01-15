import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
const uuid = require('uuid').v4;

function App() {
//   const [name, setName] = useState('');
//   const[list, setList] = useState([]);
//   const [isEditing, setisEditing] = useState(false);
//    const[editId, setEditId] = useState(null);
//   const[editedValue, setEditedValue] = useState('');
//   const[alert, setAlert] = useState({show: false, msg: '', type: ''});

//   const hanldeChange = (e)=>{
//     setName(e.target.value);
    
//   }

//   const handleSubmit = (e)=>{
//     e.preventDefault();
//      const newItem = {id: uuid(), name: name};
//      setList([...list, newItem]);
//     setName(''); 
//   }
//   console.log(list);
//   const clearAll = ()=>{
//     setList([]);
//   }

 

//   const handleEditUpdate = (e,id, newName)=>{
//      e.preventDefault();
//     console.log('hello submitted');
//     console.log(id);
//     console.log(newName);
//     setisEditing(false);

//     const changedItem = list.find(item => item.id === id)
//     changedItem.name = newName

//     // const newEditedList = list.map((item)=> {
//     //   if(item.id === id){
//     //     return {...item, }
//     //   }
//     //   else return {...item};
//     // })
//     // console.log(newEditedList);
    
//    }

//   const handleCahngeValue = (e)=>{
  
//     setEditedValue(e.target.value);
//   }

//   console.log(editedValue);

//   const deleteBtn = (id) => {
//     let newList = list.filter((item)=>
//       item.id !== id
//     );
//     setList(newList);
//     console.log('deleted');
//   }
//   console.log(list);

//   const editItem = (id)=> {
//     // const specificItem = list.map((item) => item.id === id)
//     setEditId(id);
//     setisEditing(true);
//     // console.log(specificItem);
//   }
//  console.log(editId);
  
//  let result;
// if (isEditing){
//       result = (<div>
//                   <form onSubmit = {(e)=>handleEditUpdate(e, editId, editedValue)}>
//                     <input type = "text"  placeHolder = "eg" onChange = {handleCahngeValue}/>
//                     <button>Save item</button>
//                   </form>
//               </div>)
// }
//  else {result = (<section className = "section-center">
//         grocery bud setup
//         {list.length>0? <p>Item added</p>: ''}

//         <form onSubmit = {handleSubmit}>
//           <input type = "text" value = {name} onChange = {hanldeChange}/>
//           <button>submit</button>
//         </form>            
//         <div className = "grocery-container">     
//         <List list = {list}  deleteBtn = {deleteBtn} editItem = {editItem} />
//         <button onClick = {clearAll}>ClearAll</button>
//         </div>
//         </section>)}

// return result;
///// /////////////////////////////////new solution/////////////////////////

const [name, setName] = useState('');
const[list, setList] = useState([]);
const [isEditing, setisEditing] = useState(false);
const[editId, setEditId] = useState(null);
const[editedValue, setEditedValue] = useState('');
const[alert, setAlert] = useState({show: false, msg:'', type: ''});

const handleSubmit = (e)=>{
  e.preventDefault(); 

  if(!name){
    setAlert({
      show: true,
      msg: 'Item not added',
      type: 'danger'} )
  }
  
  else if(name && isEditing){
  
   const editedItem = list.find((singleItem)=> singleItem.id === editId)
    editedItem.item = name;
    setName('');
    setisEditing(false);
    setEditId(null); 
    console.log(list);

    setAlert({
      show: true,
      msg: 'Item updated',
      type: 'success'} )
  }
  
  
  else {
    const newItem = {id:uuid(), item:name}
    setList([...list, newItem]);
    setName(''); 
    setAlert({
      show: true,
      msg: 'Item added',
      type: 'success'
    })
  }
  console.log('hello');

}

const deleteBtn = (id)=>{
  setList(list.filter((item)=> item.id !== id))
  setAlert({
    show: true,
    msg: 'Item deleted',
    type: 'success'
  })
}

const editBtn = (id)=>{
  const newEditedItem = list.find((item)=> item.id === id);
  setEditId(newEditedItem.id);
  setName(newEditedItem.item);
  setisEditing(true);

}
console.log(editId);

console.log(list);
const clearAllBtn = ()=>{
  setList([]);
  setAlert({
    show: true,
    msg: 'All items cleared',
    type: 'danger'
  })

}

return (
  <section className = "section-center">
    <form className = "grocery-form" onSubmit = {handleSubmit}>
      {alert.show? <Alert {...alert}/>: ''}
      <h3>grocery bud</h3>
      <div className = "form-control">
        <input 
        type = "text" 
        className = "grocery" 
        placeholder = "e.g" 
        value = {name} 
        onChange = {(e)=>setName(e.target.value)}
        />
        <button className = "submit-btn">
           {isEditing? 'Update': 'Submit'}
        </button> 
      </div>
    </form>
    <div className = "grocery-container">
     <List list = {list} deleteBtn = {deleteBtn} editBtn = {editBtn}/>
     {list.length>0? <button className = "clear-btn" onClick = {clearAllBtn}>Clear all</button>:''}
     
    </div>

  </section>
)

}

  


export default App
