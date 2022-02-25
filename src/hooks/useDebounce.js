import { useCallback, useEffect, useRef} from "react"

export const useDebounce = (callback, delay) => {
   const timeout = useRef()

  return (...args) => {
      if(timeout.current){
         clearTimeout(timeout.current)
      }
      timeout.current = setTimeout(() => {
         callback(args)
      }, [delay])
   }
}