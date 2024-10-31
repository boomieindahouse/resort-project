// components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-400 py-8">
            <div className="container mx-auto flex justify-around text-sm">
                <div>
                    <h4 className="font-semibold text-white text-xl">Have a question?</h4>
                    <ul className="mt-2 space-y-1">
                        <li>Services & Facilities</li>
                        <li>Careers</li>
                        <li>How to book</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white text-xl">About Us</h4>
                    <ul className="mt-2 space-y-1">
                        <li>Contact</li>
                        <li>Our Rooms</li>
                        <li>Tel : +(66) 99-999-999</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white text-xl">My Resort</h4>
                    <ul className="mt-2 space-y-1">
                        <li>Location</li>
                        <li>999 Moo.1 Choerakechin</li>
                        <li>Subdistrict Khon Buri</li>
                        <li>District Nakhonratchasima</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-6 text-xs text-gray-500">
                © Copyright Booking Hotels. All right reserved.
            </div>
        </footer>
    );
}
