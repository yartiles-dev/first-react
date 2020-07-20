import styled, {keyframes} from 'styled-components'

const DivApp = styled.div`
  text-align: center;
`

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const AppLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
       animation: ${AppLogoSpin} infinite 20s linear;
    }
`

const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const styles = {
        DivApp: DivApp,
        AppLogoSpin: AppLogoSpin,
        AppLogo: AppLogo,
        AppHeader: AppHeader
    }
