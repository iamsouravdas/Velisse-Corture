import { IoIosArrowRoundForward } from "react-icons/io";
import banner from "../../assets/landing/banner1.jpg";
import image1 from "../../assets/landing/emma-harrisova-OSB7ZxpBK-o-unsplash.jpg";
import image2 from "../../assets/landing/mohamad-khosravi-YAWSHBdjdO0-unsplash.jpg";
import image3 from "../../assets/landing/sergey-sokolov-MnSc0dSTwzM-unsplash.jpg";
import "./home.style.css";
import bannerVideo from "../../assets/landing/Untitled design.mp4"

const Home = () => {

    return (
        <>
            <div className="home-banner-container">
                <img src={banner} className="banner" alt="banner" />
                <div className="banner-caption-container">
                    <div className="banner-caption">
                        <span className="font-elegant">Indulge in couture crafted for</span>
                        <br></br>
                        <span className="font-modern">Connoisseurs of Style.</span>
                    </div>
                    <button className="shop-now mt-4">Shop Now <IoIosArrowRoundForward /></button>
                </div>
            </div>




                <div className="second-div mt-4 pt-3">
                    <h2 className="ms-4 fs-1 mb-4">Today's Trend </h2>
                    <div className="d-flex m-1">
                        <img className="banner2" src={image1} width={497} />
                        <img className="banner2" src={image3} width={500} />
                        <img className="banner2" src={image2} width={510} />
                    </div>


                </div>

            <div className="bannerVideo">
                <div className="video-banner-text ">
                    <p className="caption-head">Crafted for moments that matter.</p>
                    <p className="caption-body">From soirées to everyday elegance — make every occasion unforgettable.</p>
                </div>

                <video src={bannerVideo} width="100%" autoPlay muted loop />
            </div>
            <div className="p-3">

            </div>
        </ >
    )
}

export default Home