// components/ServicesSection.js
export default function ServicesSection() {
    return (
        <div className="bg-gray-100 p-8 flex justify-around text-center bg-gray-300">
            <div>
                <div className="text-3xl">🚗</div>
                <p>Free Parking</p>
            </div>
            <div>
                <div className="text-3xl">⏰</div>
                <p>Open 24 hours</p>
            </div>
            <div>
                <div className="text-3xl">📞</div>
                <p>Call to Order</p>
            </div>
            <div>
                <div className="text-3xl">🔒</div>
                <p>CCTV Security</p>
            </div>
        </div>
    );
}
