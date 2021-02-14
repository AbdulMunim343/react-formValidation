import './App.scss';
import {useState} from "react"


const  App = () => {
  
  const [foRm, setForm] = useState({
  email:'',
  password:''
  });

  const InputForm = (event) =>{
    const {value,name} = event.target;
  setForm((parval)=>{
    return{
      ...parval,
      [name]:value
    }
  })}
  
 const onsubmit = (event) =>{
  event.preventDefault();
 }
  
  return (
   <>
   <div className="forContainer">
    <h1>Login</h1> 

  <form onSubmit={onsubmit}>
    <input type="email" name="email" onChange={InputForm} value={foRm.email} placeholder="Email"/>
    <input type="password" name="password"  onChange={InputForm} value={foRm.password} placeholder="Password"/>
    <button type="submit">Login</button>
  </form>

   </div>
   </>
  );
}

export default App;
