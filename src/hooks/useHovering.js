import {useEffect, useState} from 'react'
export const useHover = (references) => {
   const [isHovering, setHovering] = useState(false)

   const on = () => setHovering(true)
   const off = () => setHovering(false)

   useEffect(() => {
      if(!references.current) return
      
      const node = references.current

      node.addEventListener('mouseover', on)
      node.addEventListener('mouseenter', on)
      node.addEventListener('mouseleave', off)

      return () => {
         node.removeEventListener('mouseover', on)
         node.removeEventListener('mouseenter', on)
         node.removeEventListener('mouseleave', off)
      }
   }, [references])


   return isHovering
}