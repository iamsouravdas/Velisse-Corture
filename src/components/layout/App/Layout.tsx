import { Outlet } from 'react-router-dom';
import logo from "../../../assets/logo.png";
import { navigation, navTopRightNavigation } from '../../../data/app/navigation';
import Navigation from '../../navigation/Navigation';
import './layout.style.css';

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
                    <Navigation customClass='d-flex' data = {navTopRightNavigation} />
                {/* Naviation Bar */}
            </div>
            <Outlet />
        </>
    )
}

export default Layout