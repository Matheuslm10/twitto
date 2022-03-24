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

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserIdentification = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 5px;
  }
`

export const FollowButton = styled.div`
  display: flex;
`

export const JoiningDate = styled.div`
  display: flex;
  margin-top: 22px;

  p {
    margin-top: 15px;
  }
`

export const NumbersWrapper = styled.div`
  display: flex;

  p {
    margin-top: 15px;
    margin-right: 15px;
  }
`

export const Bold = styled.span`
  color: #000000;
  font-weight: 500;
`
