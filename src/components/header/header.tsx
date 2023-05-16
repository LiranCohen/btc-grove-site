import React from "react";
import './header.scss';

interface Props {
  className?: string
}

const PageHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={`page-header ${className}`}>
       <img className="page-header__logo" src="/images/bitcoingrovelogo.png" alt="Bitcoin Grove" />
       <h1 className="page-header__title">Welcome to Bitcoin Grove!</h1>
       <h2 className="page-header__subtitle">Miami's Bitcoin Hackerspace</h2>
       <p className="page-header__intro">Bitcoin Grove is more than just a community - we're a family of Bitcoin enthusiasts, developers, and entrepreneurs. Nestled in the heart of Miami, we're dedicated to fostering an environment of innovation, learning, and collaboration in the world of Bitcoin.</p>
    </div> 
  )
}

export default PageHeader