import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import './list.css';
//// props list for const List {list, deleteBtn, editItem}
const List = ({list, deleteBtn, editBtn}) => {
  
  
  
  return (<div className = "grocery-list">
      
  {list.map((item)=> <article key = {item.id} className = "grocery-item">
                            <p className = 'title'>
                            {item.item} 
                            </p>
                            <div className = "btn-container">
                              <button type = 'button' className = 'edit-btn' onClick = {()=>editBtn(item.id)}>
                                <FaEdit />
                              </button>
                              <button type = 'button' className = 'delete-btn' onClick = {()=> deleteBtn(item.id)}>
                                <FaTrash />
                              </button>

                            </div>
                        
                      </article>
                      )}
      
  {/* {list.map((item) => (<div className = "list">
                        <p className = "list__para" key = {item.id}>{item.name}</p>
                        <button className = "list__btn" onClick = {()=>editItem(item.id)}>Edit</button>
                        <button className = "list__btn" onClick = {()=>deleteBtn(item.id)}>Delete</button>
                    </div>))} */}
       
    </div>)
}

export default List
