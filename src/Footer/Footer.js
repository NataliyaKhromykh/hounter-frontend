import './Footer.css';
import logo from '../photos/logo.svg';
import facebook from '../photos/facebook.png';
import twitter from '../photos/twitter.png';
import insta from '../photos/insta.png';

export const Footer = () =>{
    return(
        <div className='footerContainer'>

<div>
            <div className='logoWText'>
            <img src={logo} alt='logo'/>
            <h1 className='companyName'>Hounter</h1>
        </div>

        <div>
            <p className="footerP">
            We provide information about properties such as<br></br> houses, villas and apartments to help people<br></br> find their dream home
            </p>
        </div>

        <div className='media'>
            <img src={facebook} className='media' alt='facebook'/>
            <img src={twitter} className='media' alt='twitter'/>
            <img src={insta} className='media' alt='insta'/>
        </div>
        </div>

        <div>
            <h3>Property</h3>
            <p className="footerP">House</p>
            <p className="footerP">Apartment</p>
            <p className="footerP">Villa</p>
        </div>

        <div>
            <h3>Article</h3>
            <p className="footerP">New Article</p>
            <p className="footerP">Popular Article</p>
            <p className="footerP">Most Read</p>
            <p className="footerP">Tips & Tricks</p>
        </div>

        <div>
            <h3>Contact</h3>
            <p className="footerP">2464 Royal Ln. Mesa, New Jersey 45463</p>
            <p className="footerP">(671) 555-0110</p>
            <p className="footerP">info@hounter.com</p>
        </div>
            </div>

    )
}