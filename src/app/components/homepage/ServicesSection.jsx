export default function ServicesSection() {
    return (
        <div className="bg-gray-100 p-8 text-center bg-gray-400">
            <h1 className="text-3xl font-bold mb-6">Services & Facilities</h1>
            <div className="flex justify-around">
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
        </div>
    );
}
