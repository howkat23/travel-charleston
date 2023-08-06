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
      <div className="container">
        <h1>Top Attractions in Charleston</h1>
      </div>
{attraction.map((todo => {
      const { id, todoName, description, image } = todo;
return(
      <div key={id}>
        <div className='container'>
          <h2>{id} - {todoName}</h2>
        </div>

        <div className='container'>
          <p>{showMore ? description : description.substring(0,220) + "...."}
          <button onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
          </p>
        </div>

      <div className='container'>
        <img src={image} width="500px" alt="Charleston"/>
      </div>

      <div className='container'>

        </div>


        <div className='container'>
<button className="btn" onClick={() => removeTodo(id)}>Remove</button>
        </div>

        </div>)
    }))}
    </div>
  )
}





export default App;

