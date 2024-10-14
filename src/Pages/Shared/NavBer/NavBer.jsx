import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';



const NavBer = () => {
    const { logOut, user } = useContext(AuthContext)

    const signOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    const navlinks = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contract">Contract</NavLink>
        {
            user?.email && <NavLink to="/bookings">Bookings</NavLink>
        }
    </>

    return (
        <div className="bg-base-100">
            <div className="navbar px-0 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn pl-0 btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                            {navlinks}
                        </ul>
                    </div>
                    <img className=' w-12' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  space-x-4">
                        {navlinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {user?.email ? <button className=' btn btn-outline' onClick={signOut}> logOut</button>
                        : <Link className="btn btn-outline" to={"/signIn"}> Log in</Link>}

                </div>
            </div>
        </div >
    );
};

export default NavBer;