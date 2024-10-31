// pages/index.js
import Navbar from '../app/components/Navbar';
import BookingSection from '../app/components/homepage/BookingSection';
import AboutSection from '../app/components/homepage/AboutSection';
import ServicesSection from '../app/components/homepage/ServicesSection';
import RoomSection from './components/homepage/RoomSection';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div>
            <BookingSection />
            <AboutSection />
            <ServicesSection />
            <RoomSection />
        </div>
    );
}
