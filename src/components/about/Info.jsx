import React from 'react';

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i className='bx bx-award about__icon'></i>

                <h3 className="about__title">Zkušenosti</h3>
                <span className="about__subtitle">Rok práce</span>
            </div>

            <div className="about__box">
            <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Hotové</h3>
                <span className="about__subtitle">4 + Projekty</span>
            </div>

            {/* <div className="about__box">
            <i className='bx bx-support about__icon'></i>
                <h3 className="about__title">Podpora</h3>
                <span className="about__subtitle">Online 24/7</span>
            </div>   */}
        </div>
    );
};

export default Info;