import './Subscribe.css';
import sub1 from '../photos/sub1.png';
import sub3 from '../photos/sub3.png';
import sub5 from '../photos/sub5.png';
import sub6 from '../photos/sub6.png';
import sub7 from '../photos/sub7.png';
import sub8 from '../photos/sub8.png';
import Stripe from '../Stripe/StripeContainer';

export const Subscribe = () =>{
    return(
        <div className="subscribeContainer">
            <h1 className='subH1'>Subscribe For More Info
And Updates From Hounter<br></br>
For Only 3$ a Month!</h1>

            <div className="stripeContainer">
                <Stripe />
            </div>

<img className='sub1' src={sub1} alt='sub1'/>
<img className='sub5' src={sub5} alt='sub5'/>
<img className='sub6' src={sub6} alt='sub6'/>
<img className='sub3' src={sub3} alt='sub3'/>
<img className='sub7' src={sub7} alt='sub7'/>
<img className='sub8' src={sub8} alt='sub8'/>
        </div>
    )
}