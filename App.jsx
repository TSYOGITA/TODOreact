import React, { useState } from 'react';
import './App.css';

const App = () => {
   const [item, setItem] = useState("");
   const [itemList, setItemList]= useState([]);
   function handleChange(e){
     const {value}= e.target;
     setItem(value);
   }
   function handleClick() {
     setItemList(prevList =>{
        return [...prevList, item];
     });
     setItem("");
   }
  return (
    <>
    <div className="main_div">
      <div className="center_div">
         <h1>TO DO LIST</h1>
       </div>
       <div className="form">
         <input type="text" onChange={handleChange} value={item} />
         <button onClick={handleClick}>
           <span>ADD</span>
         </button>
       </div>
       <div>
         <ul>
           {itemList.map(todoItem => (
             <li>{todoItem}</li>
           ))}
         </ul>
       </div>
    </div>
    </>
  );
}

export default App;
