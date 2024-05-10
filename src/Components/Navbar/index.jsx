import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const activeStyle = 'underline underline-offset-4'

    return(
        <nav className='flex justify-around items-center fixed z-10 w-full py-4 px-10 text-base font-light top-0 bg-[#efc0f0]'>
            <ul className='flex items-center gap-4'>
                <li className='text-gray-800 font-semibold text-lg transition-transform duration-500 transform'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                        >
                        Dedicatoria
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-4'>
            <li className='text-gray-800 font-semibold text-lg transition-transform duration-500 transform'>
                    <NavLink 
                        to='/cupones'
                        className={({ isActive }) =>
                            isActive ? activeStyle : undefined}
                        >
                        Cupones
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;