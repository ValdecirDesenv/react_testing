import React from 'react'

function Form() {
  const [name, setName] = React.useState('bob ')
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="" className="form-label"></label>
        <input type="text" className="form control" />
      </div>
    </form>
  )
}

export default Form
