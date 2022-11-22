import { ButtonContainer } from './styles'
import { IButton } from './types'

export function Button({ onClick }: IButton) {

  return (
    <ButtonContainer onClick={onClick}>
      Buscar
    </ButtonContainer>
  )
}