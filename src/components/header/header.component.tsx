import React from "react";
// import {Link} from "react-router-dom";
import {connect} from "react-redux";

import {auth} from "../../firebase/firebase.utils";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
// import './header.style.scss'
import {HeaderContainer, LogoContainer, OptionLink, OptionsContainer} from './header.style'

import {createStructuredSelector} from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionLink>
                    : <OptionLink to='/signin'>
                        SIGN IN
                    </OptionLink>
            }
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null :
                <CartDropDown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

//Esta era la variante vieja
// const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
//     currentUser,
//     hidden
// })

export default connect(mapStateToProps)(Header)