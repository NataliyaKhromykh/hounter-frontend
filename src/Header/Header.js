import './Header.css';
import logo from '../photos/logo.svg';
import vector1 from '../photos/Vector1.png';


export const Header = () =>{
return(
    <div>
            <div className='vectorContainer'>
        <img className='vector' src={vector1} alt='designVector'/>
        </div>
    <div className='header'>
        <div className='logoWText'>
            <img src={logo} alt='logo'/>
            <h1 className='companyName'>Hounter</h1>
        </div>
        <div className='btnContainer'>
            <button className='btn'>About Us</button>
            <button className='btn'>Article</button>
            <button className='btn'>Property</button>
            <button className='btn Green'>Sign Up</button>
        </div>
    </div>
    </div>
)
}