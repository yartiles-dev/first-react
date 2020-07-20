import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__logo-box">
                <img src="logo-green-2x.png" className="footer__logo" alt="Full logo"/>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="" className="footer__link">Company</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Contacts Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Carrers</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Privacy Policy</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Terms</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <p className="footer__copyright">
                        Built my <a href="" className="footer__link">Yuniet Artiles</a> for his online course <a href="" className="footer__link">Advanced Css and Sass</a>. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer