import * as S from './styles'
import { ReactComponent as TwittoLogo } from 'assets/twitto-logo.svg'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <TwittoLogo />
        <S.DefaultUserIdentification>
          <div>
            <h1>{'Default User'}</h1>
            <p>{'@defaultUser22'}</p>
          </div>
          <S.ProfilePicture src={'defaultUser22.jpeg'} />
        </S.DefaultUserIdentification>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
