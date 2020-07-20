import React from "react";
export default function AppCss() {
    return (
        <header className="header">
            <div className="header__logo-box">
                <img src="logo192.png" alt="Logo" className="header__logo"/>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Outdoors</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <a href="http://localhost:3000" className="btn btn--white btn--animated"> Discover our tours</a>
            </div>
        </header>
    )
}