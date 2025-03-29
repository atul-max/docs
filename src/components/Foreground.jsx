import React, { use } from 'react'
import Card from './card'

function Foreground() {

      const ref = React.useRef(null);

    const data = [
      {
        desc: "This is the background color of the card.",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: true, text: "Download Now", tagColor: "green" }, 
      },
      {
        desc: "This is second card created in this web page.",
        filesize: ".8mb",
        close: true,
        tag: { isOpen: true, text: "Download Now", tagColor: "blue" }, 
      },
      {
        desc: "This is the background color of the card.",
        filesize: ".5mb",
        close: true,
        tag: { isOpen: false, text: "Upload", tagColor: "green" }, 
      }
    ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
  )
}

export default Foreground
