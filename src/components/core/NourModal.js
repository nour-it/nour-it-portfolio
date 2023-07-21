import React, { useEffect } from 'react'

export default function NourModal(props) {
  /**
   * @param {KeyboardEvent} e 
   */
  function keyPressEvent(e) {
    if (e.key == "Escape") {
      props.closeModal(e);
    }
  }

  function clickOuter (e) {
    if (e.target.className == "nour-modal") 
      props.closeModal(e)
  }


  useEffect(() => {
    scrollTo(0, 0)
    window.addEventListener("keyup", keyPressEvent)
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener("keyup", keyPressEvent)
    }
  }, [])


  return (
    <div className='nour-modal' onClick={clickOuter}>
      <div className='body'>
        {props.children}
      </div>
    </div>
  )
}
