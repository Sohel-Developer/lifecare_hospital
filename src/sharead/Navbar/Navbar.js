import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../assets/icons/user.png"

const Navbar = () => {
    const menuItems = <>
        <li><Link className='ml-6 p-0 bg-none bg-transparent hover:text-primary font-bold' to={'/'}>Home</Link></li>
        <li><Link className='ml-6 p-0 bg-none bg-transparent hover:text-primary font-bold' to={'/about'}>About</Link></li>
        <li><Link className='ml-6 p-0 bg-none bg-transparent hover:text-primary font-bold' to={'/appoinment'}>Appointment</Link></li>
        <li><Link className='ml-6 p-0 bg-none bg-transparent hover:text-primary font-bold' to={'/contuct'}>Contuct Us</Link></li>
    </>
    return (

        <div className="navbar  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">LifeCare</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='ml-6 p-0 bg-none bg-transparent hover:text-primary font-bold' to={'/signup'}>SignUp</Link>

                <div className=" ml-6 dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user} alt="user-Profile" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52">
                        <button>LogOut</button>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;