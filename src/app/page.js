// pages/index.js
import BookingSection from '../app/components/homepage/BookingSection';
import AboutSection from '../app/components/homepage/AboutSection';
import Rooms from './components/homepage/RoomDescSection';
import FacilitiesSection from './components/homepage/FacilitiesSection';

export default function Home() {
    return (
        <div>
            <BookingSection />
            {/* <AboutSection /> */}
            <div id="about">
                <AboutSection />
            </div>
            <div id="facility">
                <FacilitiesSection />
            </div>
            <div id="rooms">
                <Rooms />
            </div>
        </div>
    );
}
