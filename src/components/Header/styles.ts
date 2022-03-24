import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  top: 0;
  width: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #ffffff;
  border-bottom: solid 1px #d7d7d7;
  z-index: 1;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 680px;
`

export const DefaultUserIdentification = styled.div`
  display: flex;
  text-align: end;
  align-items: center;

  h1 {
    font-size: 15px;
  }

  p {
    color: #87898c;
    font-size: 15px;
  }
`

export const ProfilePicture = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 100%;
  margin-left: 15px;
`
