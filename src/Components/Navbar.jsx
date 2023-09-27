import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const links = <>
        <li className='mr-6'>
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-rose-600 text-xl font-semibold underline" : "text-xl font-semibold"
                }>Home</NavLink>
        </li>

        <li className='mr-6'><NavLink to="/donations"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-rose-600 text-xl font-semibold underline" : "text-xl font-semibold"
            }>Donations</NavLink>
        </li>
        <li><NavLink to="/statistics"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-rose-600 text-xl font-semibold underline" : "text-xl font-semibold"
            }>Statistics</NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
                <img src="/public/Logo.png" alt=""/>
            </div>
            <div className="navbar-end hidden md:flex">
                <ul className="menu-horizontal px-5">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;