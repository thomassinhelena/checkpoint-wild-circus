import React, { Fragment } from 'react'

const Form = () => {
  return (
    <Fragment>      
      <form>
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <label> Circus name 
                  <input type="text" class="form-control" placeholder="Circus name" />
                </label>
              </div>
              <div class="col">
                <label> Country 
                  <input type="text" class="form-control" placeholder="Country" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  )
}

export default Form;
