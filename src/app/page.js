// pages/index.js
import Navbar from '../app/components/Navbar';
import BookingSection from '../app/components/homepage/BookingSection';
import AboutSection from '../app/components/homepage/AboutSection';
import ServicesSection from '../app/components/homepage/ServicesSection';
import Rooms from './components/homepage/RoomDescSection';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div>
            <BookingSection />
            <AboutSection />
            <ServicesSection />
            <div id="rooms">
                <Rooms />
            </div>
        </div>
    );
}
