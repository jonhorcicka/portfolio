import React, { useState } from 'react';
import "../../css/services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">Co nabízím</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"></i>
                        <h3 className="services__title">Vývoj <br /> webových <br /> stránek </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        Zobrazit více
                    <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Vývoj webových stránek </h3>
                            <p className="services__modal-description">Poskytování kvalitní práce klientům a firmám.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vyvíjím uživatelské rozhraní.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vývoj webových stránek.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vytvářím interakce prvků UX.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Umístím vaši firemní značku.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Dělám web responzivní pro všechna rozlišení.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="services__content">
                    <div>
                        <i className="uil uil services__icon"></i>
                        <h3 className="services__title"> </h3>
                    </div>

                    <span className="services__button">View More{" "}  <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"> </h3>
                            <p className="services__modal-description">Servis s více než 3 lety zkušeností. Poskytování kvalitní práce klientům a firmám.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vyvíjím uživatelské rozhraní.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vývoj webových stránek.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vytvářím interakce prvků UX.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Umístím vaši firemní značku.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Návrhy a makety produktů pro firmy.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil services__icon"></i>
                        <h3 className="services__title"> </h3>
                    </div>

                    <span className="services__button">View More{" "}  <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className="services__modal">
                        <div className="services__modal-content">
                            <i className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title"> </h3>
                            <p className="services__modal-description">Servis s více než 3 lety zkušeností. Poskytování kvalitní práce klientům a firmám.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vyvíjím uživatelské rozhraní.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vývoj webových stránek.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Vytvářím interakce prvků UX.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Umístím vaši firemní značku.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Návrhy a makety produktů pro firmy.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Services;