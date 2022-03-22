import styled, { css } from 'styled-components'

export type CharactersLeftProps = {
  exceedsTheLimit: boolean
}

export const PostMaker = styled.div`
  margin-top: 80px;

  button:disabled {
    filter: opacity(60%);
    cursor: default;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const BottomWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
`

export const CharactersLeft = styled.div<CharactersLeftProps>`
  ${({ exceedsTheLimit }) => css`
    color: ${exceedsTheLimit ? '#ff0000' : '#87898c'};
    margin-left: auto;
    margin-right: 10px;
  `}
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
