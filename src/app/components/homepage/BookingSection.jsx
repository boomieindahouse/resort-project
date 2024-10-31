export default function BookingSection() {
    return (
        <div className="text-center h-[600px] bg-gray-400 flex flex-col justify-center items-center">
            <div className="cols">
                <h2 className="text-3xl font-semibold">Tonnam Resort</h2>
                <p className="text-gray-500">Book a Room - Discover available rooms</p>
            </div>
            <div className="bg-gray-300 p-6 rounded-lg mt-4 inline-block p-10">
                <div className="flex space-x-5">
                    <input type="date" placeholder="Check-In Date" className="p-2 border" />
                    <input type="date" placeholder="Check-Out Date" className="p-2 border" />
                    <select className="p-2 border">
                        <option>Single bed</option>
                        <option>Double bed</option>
                    </select>
                    <input type="number" placeholder="Amount" className="p-2 border" />
                </div>
                <button className="bg-blue-500 text-white p-2 mt-4 hover:bg-blue-600">Check available room</button>
            </div>

        </div>
    );
}
