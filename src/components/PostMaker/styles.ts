import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 10px;
  }
`

export const TextInput = styled.div`
  font-family: 'BlinkMacSystemFont';
  font-size: 20px;
  line-height: 22px;
  min-height: 32px;
  outline: none;

  &[contentEditable='true']:empty:before {
    color: #61707c;
    content: attr(placeholder);
  }
`
