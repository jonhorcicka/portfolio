import React from 'react';
import "../../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Horčička</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href=" https://www.instagram.com/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-instagram"></i>
                    </a>


                    <a href=" https://www.github.com/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                    </a>

                    <a href=" https://www.twitter.com/" className="footer__social-link" target="_blank">
                        <i className="uil uil-twitter-alt"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169;Jan Horčička. All rigths reserved
                </span>

            </div>
        </footer>
    )
}

export default Footer;