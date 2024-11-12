import { Header } from "../Header/Header";
import './Banner.css';
import traveloka2 from "../photos/traveloka_logo2.png";
import traveloka3 from "../photos/traveloka_logo3.png";
import traveloka4 from "../photos/traveloka_logo4.png";
import traveloka5 from "../photos/traveloka_logo5.png";
import bannerImg from "../photos/bannerImg.png";


export const Banner = () =>{
    return(
        <div>
<Header/>
<div className="bannerContainer">
    <div>
    <h1 className="bannerH1">Find The Place To<br></br> Live <span className="highlighted-text">Your Dreams</span><br></br> Easily Here</h1>
<p className="bannerP">Everything you need about finding your place to live will be <br></br> here, where it will be easier for you</p>
<p className="bannerP">Our Partnership</p>
<div className="partnersContainer">
    <img  className="partner" src={traveloka2} alt="partner2"/>
    <img  className="partner" src={traveloka3} alt="partner3"/>
    <img  className="partner" src={traveloka4} alt="partner4"/>
    <img  className="partner" src={traveloka5} alt="partner5"/>
</div>
</div>

<img className="bannerImg" src={bannerImg} alt="bannerimage"/>

</div>


        </div>
    )
}