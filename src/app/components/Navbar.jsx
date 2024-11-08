// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-700 text-white p-5 flex justify-between items-center fixed top-0 left-0 w-full z-50">
            {/* left side */}
            <Link href='/' className="text-lg font-bold px-10">Tonnam Resort</Link>

            {/* mid */}
            <div className="flex-grow text-center">
                <Link href="#about" className='px-5'>
                    About
                </Link>
                <Link href="#facility" className='px-5'>
                    Facilities
                </Link>
                <Link href="#rooms" className='px-5'>
                    Rooms
                </Link>
            </div>

            {/* Right side */}
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
