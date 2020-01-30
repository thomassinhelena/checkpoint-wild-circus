import React, { Fragment } from 'react'

 const Form = () => {
  return (
    <Fragment>      
      <form>
      <div class="row">
        <div class="col">
        <label> Circus name </label>
          <input type="text" class="form-control" placeholder="Circus name" />
        </div>
        <label> Country </label>
        <div class="col">
          <input type="text" class="form-control" placeholder="Country" />
        </div>
      </div>
      </form>
    </Fragment>
  )
}

export default Form;
