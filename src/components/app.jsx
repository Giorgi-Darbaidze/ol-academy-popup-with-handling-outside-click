import React from 'react'

const Popup = () => {
   const [isOpen, setIsOpen] = React.useState(false)
   const containerRef = React.useRef(null)

   const toggle = () => setIsOpen(!isOpen)

   const closeOnBackdrop = event => {
      if (event.target === containerRef.current) {
         toggle()
      }
   }

   return (
      <div>
         <button className='btn' onClick={toggle}>Click Me</button>
         {isOpen && (
            <div
               className='popup_container'
               ref={containerRef}
               onClick={closeOnBackdrop}
            >
               <div className='popup'>
                     <button onClick={toggle} className='close'>&#10754;</button>
                  <div className='popup_title'>
                     <h1>Notification</h1>
                  </div>
                  <div className='divider_line' />
                  <p className='msg'>I'm Pop-up & I took your time on this website</p>
               </div>
            </div>
         )}
      </div>
   )
}
export default Popup