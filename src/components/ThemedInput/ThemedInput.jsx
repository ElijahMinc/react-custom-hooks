import React from 'react'
import { FilledInput } from '@material-ui/core'
import { useInput } from '../../hooks/useInput'

export const ThemedInput = () => {
   const {
      inputInfo,
      validInput,
      maxLengthError,
      minLengthError,
      isDirty,
      isEmpty,
      maxLength,
      minLength
   } = useInput('default Value', {
      maxLength: 6,
      minLength: 3
   })

   return (
      <>
         <FilledInput {...inputInfo} error={!validInput} />
         {isDirty && isEmpty && <div style={{ color: 'red' }}>is Dirty</div>}
         {maxLengthError && isDirty && <div style={{ color: 'red' }}>{`Max length value is ${maxLength}`}</div>}
         {minLengthError && isDirty && <div style={{ color: 'red' }}>{`Min length value is ${minLength}`}</div>}
      </>
   )

}