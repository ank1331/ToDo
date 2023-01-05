import React, { useState } from 'react'

export default function SearchToDo() {
  const [order, setOrder] = useState("ASC")
  return (
    <div>
      <div class="flex justify-around py-10">
        <button
          class="bg-sky-500 flex w-60 h-12 justify-center items-center rounded-lg">
          {" "}
          Sort on Created Date
        </button>

        
      </div>
    </div>
  )
}
