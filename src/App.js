import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {
  
const [attraction, setTodo] = useState(data);
const [showMore, setShowMore] = useState(false);

const removeTodo = (id) => {
  let newTodo = attraction.filter((todo) => todo.id !== id);
  setTodo(newTodo)
}

return (<div>
  <div className='container'>
    <h1>Top Attractions {attraction.length} in Charleston</h1>
  </div>
  {attraction.map((todo => {
    const { id, todoName, description, image, source, showMore } = todo;
return(
  <div key={id}>
      <div className='container'>
          <h2>{id} - {todoName}</h2>
      </div> 
      <div classname='container'>
        <p>{showMore ? description : description.substring(0, 220) + '....'}
          <button onClick={() => setShowMore(!showMore)}>Show more</button>
          </p>
          </div>      

      <div className='container'>
        <img src={image} width="300px" alt="Charleston"/>
        </div>        

        <div className='container'>
          <p>{source}</p>
  </div>  
  
  <div classname='container'>
   <button className="btn" onClick={() => removeTodo(id)}>Remove</button>
  </div>
  </div>)      


    }))}
    </div>
  )
}

export default App;

