import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Form = () => {

const [form, setForm] = useState({
  country:"",
  name:""
});


  const handleInputCountry = (e) => {
    setForm({
      ...form, country: e.target.value 
    })
  }

  const handleInputName = (e) => {
    setForm({
      ...form, name: e.target.value 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8000/list", form)
    .then((result) => {
      setForm(result)
    })
  }

  return (
    <Fragment>      
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <label> Circus name 
                  <input onChange={handleInputName} 
                  type="text" 
                  className="form-control" 
                  placeholder="Circus name" />
                </label>
              </div>
              <div className="col">
                <label> Country 
                  <input onChange={handleInputCountry} 
                  type="text" 
                  className="form-control" 
                  placeholder="Country" />
                </label>
                <button>envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Form;
