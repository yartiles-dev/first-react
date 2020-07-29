import React from "react";

import {SpinnerContainer, SpinnerOverlay} from './with-spinner.style'

const withSpinner = WrappedComponent => ({isLoading, ...other}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...other}/>
        )

    //Esta es una forma de hacerlo
    // return ({isLoading, ...other}) => {
    //     return isLoading ? (
    //         <SpinnerOverlay>
    //             <SpinnerContainer/>
    //         </SpinnerOverlay>
    //     ) : (
    //         <WrappedComponent {...other}/>
    //     )
    // }

    //Esta era una forma de hacerlo
    // const Spinner = ({isLoading, ...other}) => {
    //     return isLoading ? (
    //         <SpinnerOverlay>
    //             <SpinnerContainer/>
    //         </SpinnerOverlay>
    //     ) : (
    //         <WrappedComponent {...other}/>
    //     )
    // }
    // return Spinner
}

export default withSpinner