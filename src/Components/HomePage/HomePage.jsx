import React from 'react';
import Map from './Map';
import CircusList from './CircusList';

const HomePage = () => {
  return (
    <div>       
     <Map {...Map.defaultProps}/>
     <CircusList />
    </div> 
  )
}

export default HomePage;
