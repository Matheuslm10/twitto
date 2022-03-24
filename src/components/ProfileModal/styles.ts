import styled from 'styled-components'

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;

  h1 {
    font-size: 20px;
  }

  p {
    font-size: 15px;
    color: #87898c;
  }
`

export const UserIdentification = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 5px;
  }
`

export const JoiningDate = styled.div`
  display: flex;

  p {
    margin-top: 15px;
  }
`

export const FollowWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    margin-top: 15px;
  }
`

export const Bold = styled.span`
  color: #000000;
  font-weight: 500;
`
