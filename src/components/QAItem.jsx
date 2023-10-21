import React from 'react'

const QAItem = ({h3,p}) => {
  return (
    <div className='QAitem'>
      <h3><span>~</span>{h3}</h3>
      <p>{p}</p>
    </div>
  )
}

export default QAItem
