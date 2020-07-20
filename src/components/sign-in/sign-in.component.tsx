import React, {ChangeEvent, FormEvent} from "react";

import './sign-in.style.scss'

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, signInWithGoogle} from '../../firebase/firebase.utils'
import {notification} from "antd";
import 'antd/lib/notification/style/index.css'
// import App from "../../App";
// const {prototype} = App

interface State {
    email: string;
    password: string
}

class SignIn extends React.Component<{}, State>{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!this.isGoogleSignIn) {
            const {email, password} = this.state
            try {
                await auth.signInWithEmailAndPassword(email, password)
                this.setState({email: '', password: ''})
            } catch (e) {
                notification['error']({
                    message: 'Autenticación fallida',
                    description:e.message,
                })
            }
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const stateNew = {} as State
        stateNew[event.target.name] = event.target.value

        this.setState( {...stateNew})
    }

    signInWithGoogle = async (signIn: boolean) => {
        this.isGoogleSignIn = signIn
        return this.isGoogleSignIn ? signInWithGoogle() : null
    }

    isGoogleSignIn: boolean = false

    render() {
        return (
            <div className="sign-in">
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    {/*Si se ponen botones dentro de un form estos por defecto van a ser de tipo submit si c quieren cambiar hay q cambiarlos manualmente*/}
                    <FormInput type="email" name="email" handleChange={this.handleChange} label='email' value={this.state.email} required/>
                    <FormInput type="password" name="password" handleChange={this.handleChange} label='password' value={this.state.password} required/>

                    <div className="buttons">
                        <CustomButton inverted={false} /*Esta manera esta depinga disabled={!!prototype.state.currentUser}*/ isGoogleSignIn={false} onClick={() => this.signInWithGoogle(false) /*Otra manera de hacerlo es this.signInWithGoogle.bind(this, false)*/ } type='submit'> Sign in </CustomButton>
                        <CustomButton inverted={false} /*disabled={!!prototype.state.currentUser}*/ isGoogleSignIn={true} onClick={() => this.signInWithGoogle(true)} type='button'> Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn