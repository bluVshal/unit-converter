import React from 'react'

const Conversion = (props) => {

    const { type } = props;

  return (
    <div>
    {!type ? <p>AA</p> : <p>BB</p>}
      
    </div>
  )
}

export default Conversion
