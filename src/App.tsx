import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import './App.css'
import {notification} from "antd";
import 'antd/lib/notification/style/index.css'

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component"
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.actions'
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import CheckOut from "./pages/checkout/checkout.component";

export interface User {
    id: string
    displayName: string;
    email:string;
    createdAt: Date
}

class App extends React.Component<any, any> {

    unsubscribeFromAuth: Function = () => {};

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if(userAuth){
                try {
                    const userRef = await createUserProfileDocument(userAuth)

                    userRef?.onSnapshot(snapShot => {
                        setCurrentUser({
                            currentUser: {
                                id: snapShot.id,
                                email: snapShot.data()?.email,
                                createdAt: snapShot.data()?.createdAt,
                                displayName: snapShot.data()?.displayName
                            }
                        })

                        notification['success']({
                            message: 'Autenticación exitosa',
                            description: 'Usted se ha autenticado correctamente en el sistema',
                        })
                    })
                } catch (e) {
                    notification['error']({
                        message: 'Error Inesperado',
                        description:e.message,
                    })
                    return
                }
            } else {
                setCurrentUser(userAuth)
                notification['info']({
                    message: 'Autenticación',
                    description: 'No se encuentra autenticado en el sistema',
                })
            }
        })
    }

    componentWillUnmount() {
            this.unsubscribeFromAuth()
    }

    render () {
       return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path="/checkout" component={CheckOut}/>
                    <Route exact path="/signin" render={()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp/>)}/>
                </Switch>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);



























































////////////////////////////////////////////////
// import './App.scss'
//
// import UserProfile from "./components/user-profile.component";
// import UserList from "./components/user-list.component";
//
// export default function App() {
//     return (
//         <div className="App">
//             <UserList />
//             <UserProfile name="Yihua" email="yartiles161195@gmail.com"/>
//         </div>
//     )
// }

////////////////////////////////////////////////


// import React from "react";
// import logo from "./logo.svg";
// import { CardList } from "./components/card-list/card-list";
// import {Input} from "antd";
// import 'antd/dist/antd.css'
//
// /////////////////////////////////////////////////////////////////////////////////////
// const AppStyles = require('./App.style').styles
//
// export interface monster {
//   id: number;
//   name: string;
//   email: string;
// }
//
// interface State {
//     monsters: monster[];
//     search: string
// }
//
// abstract class App extends React.Component<{},State> {
//   constructor(props) {
//     super(props);
//       this.state = {
//           monsters: [],
//           search: ""
//       };
//   }
//
//   visualizar_inicio = (): JSX.Element => {
//       const {monsters, search} = this.state
//     if (monsters.length === 0)
//       return (
//           <AppStyles.AppHeader>
//             <AppStyles.AppLogo src={logo} alt="logo" />
//           </AppStyles.AppHeader>
//       );
//     else
//       return (
//           <div>
//             <Input
//                 type="search"
//                 placeholder="Search monsteers"
//                 onChange={(element) =>
//                     this.setState({ search: element.target.value })
//                 }
//             />
//             <CardList
//                 monsters={monsters.filter((monster) =>
//                     monster.name
//                         .toLowerCase()
//                         .includes(search.toLowerCase())
//                 )}
//             />
//           </div>
//       );
//   };
//
//   componentDidMount = (): void => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((models) => {
//           this.setState({ monsters: models });
//         });
//   };
//
//   render() {
//     return <AppStyles.DivApp>{this.visualizar_inicio()}</AppStyles.DivApp>;
//   }
// }
//
// export default App;



// import React from 'react';
// import './App.css';
// import {Route, Switch, Link, /*withRouter*/} from 'react-router-dom'
// import HomePage from './pages/homepage/homepage.component';
// // import {HashRouter} from "react-router-dom";
//
// const DivPruebas = props => {
//     console.log(props)
//     return (
//         <div>
//             <Link to='/'> HomePage </Link>
//             <Link to={`${props.match.url}/1`}> prueba 1 </Link>
//             <Link to={`${props.match.url}/2`}> prueba 2 </Link>
//             <Link to={`${props.match.url}/3`}> prueba 3 </Link>
//         </div>
//     )
// }
//
// const DivPruebaDetails = props => {
//     console.log(props)
//     return (
//         <div>
//             <Link to='/Pruebas'> HomePage </Link>
//             <h1> Esta es la prueba {props.match.params.pruebaId}</h1>
//         </div>
//     )
// }
//
// function App() {
//     return (
//         <div>
//             <Switch> // Funciona q en cuanto detecta una ruta q cumple en parte pone la primera q encuentre verdadera
//                 <Route exact path={'/'} component={HomePage}/>
//                 <Route exact path={'/Pruebas'} component={DivPruebas}/>
//                 <Route path={'/Pruebas/:pruebaId'} component={DivPruebaDetails}/>
//             </Switch>
//         </div>
//     );
// }
//
// export default App;
