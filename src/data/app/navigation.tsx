import type { ReactElement } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdAccountCircle, MdShoppingCart } from "react-icons/md";

export interface navigationInterface {
    optionName: string | ReactElement,
    routePath?: string,
    customFunction? : ()=> void
}

export const navigation: navigationInterface[] = [
    {
        optionName: 'New Arrival',
        routePath: "/new-arrival"
    },
    {
        optionName: 'Men',
        routePath: "/men"
    },
    {
        optionName: 'Women',
        routePath: "/women"
    },
    {
        optionName: 'Kids',
        routePath: "/kids"
    },
    {
        optionName: 'Home',
        routePath: "/home"
    },
    {
        optionName: 'Beauty',
        routePath: "/beauty"
    },

]

export const navTopRightNavigation: navigationInterface[] = [
    {
        optionName: <input type="text" className="search-box cursor-pointer" placeholder='Search for products, brands and more' />,
    },
    {
        optionName: <MdShoppingCart className='mt-4 cursor-pointer nav-icons' />
    },
    {
        optionName: <IoMdHeartEmpty className='mt-4 ms-2 cursor-pointer nav-icons' />
    },
    {
        optionName: <MdAccountCircle  className='mt-4 ms-2 me-4 cursor-pointer nav-icons' />
    },

]