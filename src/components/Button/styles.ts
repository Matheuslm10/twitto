import styled from 'styled-components'

export const Button = styled.button`
  background-color: #08a8d6;
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin-left: auto;
  width: 88px;
  height: 36px;
  border-radius: 32px;
  border: 0;
  cursor: pointer;

  :hover {
    filter: brightness(90%);
  }

  :active {
    transform: scale(98%);
  }
`
