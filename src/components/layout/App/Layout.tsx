import { Outlet } from 'react-router-dom'
import { navigation } from '../../../data/app/navigation'
import Navigation from '../../navigation/Navigation';
import logo from "../../../assets/logo.png";
import './layout.style.css';
import { MdAccountCircle, MdShoppingCart } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';

const Layout = () => {
    return (
        <>
            <div className="d-flex justify-content-between">
                {/* Start Header section */}
                <img className="logo" src={logo} alt="logo" />

                {/* Mid Header Section */}
                <div>
                    <Navigation customClass='appLayoutNavigationMenu' data={navigation} />
                </div>

                {/* End Header section */}
                <div className="d-flex">
                    <input type="text" className="search-box" placeholder='Search for products brands and more' />
                    <MdShoppingCart  className='mt-4 cursor-pointer nav-icons' />
                    <IoMdHeartEmpty  className='mt-4 ms-2 cursor-pointer nav-icons' />
                    <MdAccountCircle  className='mt-4 ms-2 me-4 cursor-pointer nav-icons' />
                </div>


                {/* Naviation Bar */}
            </div>
            

            <Outlet />
        </>
    )
}

export default Layout