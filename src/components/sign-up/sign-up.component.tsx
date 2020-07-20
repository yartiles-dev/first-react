import React, {ChangeEvent, FormEvent} from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";
import {notification} from "antd";
import 'antd/lib/notification/style/index.css'

import './sign-up.style.scss'

interface State {
    email: string;
    password: string;
    confirmPassword: string;
    displayName: string
}

class SignUp extends React.Component<{}, State>{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            displayName: ''
        }
    }

    handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const {password,displayName,email,confirmPassword} = this.state

        if(password !== confirmPassword){
            notification['error']({
                message: 'Contraseñas diferentes',
                description: 'Las dos contraseñas deben ser iguales',
            })
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword( email, password )

            await createUserProfileDocument(user, {displayName})

            this.setState({
                email: '',
                password: '',
                confirmPassword: '',
                displayName: ''
            })

            notification['success']({
                message: 'Creación de cuenta exitosa',
                description: 'Su cuenta ha sido creada correctamente en el sistema',
            })

        } catch (e) {
            notification['error']({
                message: 'Creación de cuenta fallida',
                description: e.message,
            })
        }
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const stateNew = {} as State
        stateNew[event.target.name] = event.target.value

        this.setState( {...stateNew})
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" handleChange={this.handleChange} label='Display Name' value={this.state.displayName} required/>
                    <FormInput type="email" name="email" handleChange={this.handleChange} label='Email' value={this.state.email} required/>
                    <FormInput type="password" name="password" handleChange={this.handleChange} label='password' value={this.state.password} required/>
                    <FormInput type="password" name="confirmPassword" handleChange={this.handleChange} label='Confirm Password' value={this.state.confirmPassword} required/>

                    <CustomButton inverted={false} isGoogleSignIn={false} type="submit"> SIGN UP </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp