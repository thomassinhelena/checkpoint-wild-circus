import React from 'react';
import Map from './Map';

const HomePage = () => {
  return (
    <div>       
     <Map {...Map.defaultProps}/>
    </div> 
  )
}

export default HomePage;
