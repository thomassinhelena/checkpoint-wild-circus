import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CircusList = () => {

const[list, setList] = useState([]);

useEffect(() => {
    axios.get("http://localhost:8000/list")
    .then((result) => {
      setList(result)
    })
  })
return (
   <div>
     {JSON.stringify(list)}
   </div>
  )
}

export default CircusList
