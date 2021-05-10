import styled from 'styled-components'
import TextField from "@material-ui/core/TextField";
import OutlinedInput from'@material-ui/core/OutlinedInput'
import Button from '@material-ui/core/Button'

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  margin-top: 20vh;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StyledInput = styled(TextField)`
  width: 20.5rem;
  height: 3.5rem;
`;

export const StyledPassword = styled(OutlinedInput)`
  width: 20.5rem;
  height: 3.5rem;
`

export const SignUpContainer = styled.div`
  width: 80vw;
  max-width: 400px;
`

export const StyledButton = styled(Button)`
  width: 20.5rem;
  height: 3.5rem;
`