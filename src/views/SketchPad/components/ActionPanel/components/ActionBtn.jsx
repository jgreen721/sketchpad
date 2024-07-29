import React from 'react'

const ActionBtn = ({btnText,handleClick,action,activeKey}) => {
  // console.log(action,activeKey)
  return (
    <button
    onClick={handleClick}
    id="draw-btn"
    className={`action-btn ${action == activeKey && 'active'}`}
  >
    {btnText}
  </button>
  )
}

export default React.memo(ActionBtn)