import { useState, useEffect } from "react";
import { dataHouse } from "../data/dataHouse";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import './Carousel.css';

export const Carousel = () => {
    const AllHouses = dataHouse;
    const slideLength = dataHouse.length;
    const [card, setCard] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

    // Update isMobile when window resizes
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCard((card + 1) % slideLength);
    };

    const prevSlide = () => {
        setCard((card - 1 + slideLength) % slideLength);
    };

    return (
        <div className="cardContainer">
            <div className="featuredHouses">
                <h3>Featured House</h3>
                <div className="arrowcontainer">
                    <AiOutlineArrowLeft className="arrow prev" onClick={prevSlide} />
                    <AiOutlineArrowRight className="arrow next" onClick={nextSlide} />
                </div>
            </div>

            <div className="carouselTrack">
                {isMobile
                    ? (
                        <div className="carousel-card">
                            <img className="house" src={AllHouses[card].photo} alt={`house-${card}`} />
                            <h3 className="housename">{AllHouses[card].housename}</h3>
                            <h3 className="houseprice">$ {AllHouses[card].price}</h3>
                        </div>
                    ) : (
                        Array.from({ length: 3 }).map((_, index) => {
                            const houseIndex = (card + index) % slideLength;
                            return (
                                <div key={houseIndex} className="carousel-card">
                                    <img className="house" src={AllHouses[houseIndex].photo} alt={`house-${houseIndex}`} />
                                    <h3 className="housename">{AllHouses[houseIndex].housename}</h3>
                                    <h3 className="houseprice">$ {AllHouses[houseIndex].price}</h3>
                                </div>
                            );
                        })
                    )
                }
            </div>
        </div>
    );
};

