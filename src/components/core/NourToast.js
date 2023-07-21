import React, { useEffect } from 'react'

export default function NourToast({ hideToast, toast }) {

  useEffect(() => {
      let timer = setTimeout(() => {
        hideToast()
        clearTimeout(timer)
      }, 5000)

    return () => {

    }
  }, [])


  return (
    <div className={'nour-toast ' + toast.type}>{toast.message}</div>
  )
}
