import {useRef} from 'react'
import style from './Hover.module.css'
import { setClasses } from '../../helpers/setClasses'
import { useHover } from '../../hooks/useHovering'
export const Hover = () => {
   const ref = useRef()
   const isHovering = useHover(ref)

   return (
      <div ref={ref} className={setClasses(style.hoverElement, isHovering ? style.red : style.green)}></div>
   )
}