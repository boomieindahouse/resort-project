// components/RoomSection.js
export default function RoomSection() {
    return (
        <div className="py-8 bg-white">
            <h1 className="text-3xl font-bold text-center mb-6">Our Rooms</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
                <div className="border w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden text-center shadow-md">
                    <div className="bg-gray-300 h-60 w-full flex items-center justify-center">
                        <p>Image Placeholder</p>
                    </div>
                    <div className="p-10 flex flex-col gap-6">
                        <h3 className="font-semibold text-lg">Single Bed</h3>
                        <p className="text-gray-600">450 Baht per Night</p>
                        <a href="#" className="text-blue-500">See more...</a>
                    </div>
                </div>
                <div className="border w-full md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden text-center shadow-md">
                    <div className="bg-gray-300 h-60 w-full flex items-center justify-center">
                        <p>Image Placeholder</p>
                    </div>
                    <div className="p-10 flex flex-col gap-6">
                        <h3 className="font-semibold text-lg">Twins Bed</h3>
                        <p className="text-gray-600">550 Baht per Night</p>
                        <a href="#" className="text-blue-500">See more...</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
