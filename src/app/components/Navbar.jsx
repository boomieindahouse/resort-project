// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-700 text-white p-5 flex justify-between items-center">
            <div className="text-lg font-bold px-10">Tonnam Resort</div>
            <div>
                <Link href="/signin" className='px-5'>
                    Sign In
                </Link>
                <Link href="/signup" className='px-5'>
                    Sign Up
                </Link>
            </div>
        </nav>
    );
}