import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append('num_terminals',2)
    formData.append('w',1)
    formData.append('w',1)
    formData.append('line_id',4)
    formData.append('linename',"松林-埔里")
    formData.append('distance',.0)
    formData.append('distance',.0)
    formData.append('distance',.0)
    formData.append('files[]',e.target.files[0].files[0])
    formData.append('files[]',e.target.files[1].files[0])
    const res = await axios.post('http://localhost:5000/api/v1/event/',formData,{
      headers:{
        'Accept':'application/json',
        "Content-Type":"multipart/form-data"
      }
    })
    console.log("send")
    console.log(res)
  }

  return (
    <div className="App">
      <form  onSubmit={(e) => handleSubmit(e)}>
        <input name="files" type="file" multiple/>
        <input name="files" type="file" multiple/>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
