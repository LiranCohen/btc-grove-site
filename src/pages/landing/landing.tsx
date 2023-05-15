import React from 'react';
import './landing.scss';
import PageHeader from '../../components/header/header';
import Membership from '../../components/membership/membership';
import Donation from '../../components/donation/donation';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            <PageHeader className="landing-page" /> 
            <Membership className="landing-page" />
            <Donation className="landing-page" />

            <div className="join">
                <h3 className="join__title">Ready to join Bitcoin Grove?</h3>
                <p className="join__desc">Become a part of Miami's thriving Bitcoin community...</p>
                <button className="join__button">Sign Up</button>
            </div>
        </div>
    );
};

export default LandingPage;
