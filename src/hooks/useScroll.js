import {useEffect, useRef} from 'react'

export const useScroll = (parentRef, childRef, callback) => {
   const observer = useRef()

   useEffect(() => {
      const childrenElement = childRef.current
      const options = {
         root: parentRef.current,
         rootMargin: '0px',
         threshold: 0
     }
     observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting){
         console.log('intersecting')
         callback()
      }
     }, options)

       observer.current.observe(childrenElement)

     return () => {

      observer.current.unobserve(childrenElement)

     }
   }, [callback])
}