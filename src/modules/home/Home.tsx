import { IoIosArrowRoundForward } from "react-icons/io";
import banner from "../../assets/banner1.jpg";
import "./home.style.css"
const Home = () => {
    return (
        <div>
            <div className="home-banner-container">
                <img src={banner} className="banner" alt="banner 1" />
                <div className="banner-caption-container">
                    <div className="banner-caption">

                        <span className="font-elegant">Indulge in couture crafted for</span>
                        <br></br>
                        <span className="font-modern">connoisseurs of style.</span>

                    </div>
                    <div>
                        <button className="shop-now ">Shop Now <IoIosArrowRoundForward/></button>

                    </div>

                </div>
            </div>
        </div >
    )
}

export default Home