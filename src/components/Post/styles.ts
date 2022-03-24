import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding-bottom: 10px;
`

export const ProfilePicture = styled.img`
  height: 48px;
  width: 48px;
  border-radius: 100%;
  margin-right: 15px;
  cursor: pointer;
`

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
  cursor: pointer;

  h1 {
    font-size: 15px;
  }

  h2 {
    font-weight: normal;
    font-size: 15px;
    color: #87898c;
    margin-left: 5px;
  }
`

export const PostContent = styled.p`
  white-space: pre-line;
`
