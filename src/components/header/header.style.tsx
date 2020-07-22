import styled from 'styled-components'
// import {css} from 'styled-components'
import {Link} from "react-router-dom";

// const OptionContainerStyle = css`
//   padding: 10px 15px;
//   cursor: pointer;
// `

export const HeaderContainer = styled.div`
  height: 70px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  margin: 0px auto 50px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`

// export const OptionDiv = styled.div`
//   ${OptionContainerStyle}
// `