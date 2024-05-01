import React, { useState } from 'react'
import "./index1.css"
import Logo from './Logo';
import Stats from './Stats';
import Packinglist from './Packinglist';
import Form from './Form';

export default function App() {

  const [items,Setitems] = useState([]);

  function handleadditem(newItem) {
    Setitems((prevItems) => [...prevItems, newItem]);
  }

  function handledeleteitem(id) {
    Setitems(items =>items.filter(item =>item.id !== id));
    }

  function handletoggleitem (id){
    Setitems((items) => items.map((item) => item.id === id ?{...item,packed: !item.packed} : item));
  }

  function handleclearlist(){
    const confirm = window.confirm("你確定要全部刪除嗎");
    if(confirm === true){
      Setitems([])
    }
  }
  
  return (
    <div>
      <Logo />
      <Form onadditems={handleadditem} />
      <Packinglist items={items} ondeleteitem ={handledeleteitem} ontoggleitem={handletoggleitem} onclear = {handleclearlist}/>
      <Stats items={items}/>
    </div>
  )
  
}






