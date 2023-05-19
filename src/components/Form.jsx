import React, { useState } from 'react'
import Error from './Error'

const Form = ({setSearch}) => {

  const [term, setTerm] = useState("")
  const [error, setError] = useState(false)
  
  
  const handleChange = (e) => {
    e.preventDefault()
    if(term.trim()== ""){
      return setError(true)
    }
    setError(false)
    setSearch(term)
  }

  return (
   <form onSubmit={handleChange}>
    <fieldset>
      <div className='form-group row'>
        <div className='col-md-8'>
          <input onChange={(e) => setTerm(e.target.value)} type="text"
          className='form-control form-control-lg'
          value={term} />
        </div>
        <div className='col-md-3'>
          <input type="submit"
          className='w-100 btn btn-lg btn-danger'
            />
          
        </div>

      </div>
    </fieldset>

    {error ? <Error message="inserta un termino de busqueda"/> : null}
   </form>
  )
}

export default Form