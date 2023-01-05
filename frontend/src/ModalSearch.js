import React from 'react'

export default function ModalSearch({open, children}) {
    if(!open) return null
  return (
    <>
    <div class="fixed top-0 left-0 bottom-0 right-0 bg-gray-200 opacity-70 z-1000"/>
    <div class="fixed bg-gray-700 top-1/4 left-1/4 h-80 w-1/2 z-1000">
     {children}
    </div>
    </>
  )
}
