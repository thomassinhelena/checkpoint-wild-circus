import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CircusList = () => {
const [list, setList] = useState({

  latitude: '',
  longitude: '',
  name: '',
  location: '',
  picture: ''
});


useEffect(() => {
  axios.get("https://localhost:8000/list")
    .then((result) => {
      console.log(list)
      setList(result.data);
    });
}, []);

return (
   <div>
     
   </div>
  )
}

export default CircusList
