// pages/index.js
import Navbar from '../app/components/Navbar';
import BookingSection from '../app/components/homepage/BookingSection';
import AboutSection from '../app/components/homepage/AboutSection';
import Rooms from './components/homepage/RoomDescSection';
import FacilitiesSection from './components/homepage/FacilitiesSection';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div>
            <BookingSection />
            <AboutSection />
            <div id="facility">
                <FacilitiesSection />
            </div>
            <div id="rooms">
                <Rooms />
            </div>
        </div>
    );
}
