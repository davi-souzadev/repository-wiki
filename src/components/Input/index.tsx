import { InputContainer } from './styles'
import { IInput } from './types'

export function Input({ value, onChange }: IInput) {

  return (
    <InputContainer >
      <input type="text" onChange={onChange} value={value}/>
    </InputContainer>
  )
}