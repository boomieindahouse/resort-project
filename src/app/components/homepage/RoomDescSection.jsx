// src/app/rooms/page.jsx
"use client"; // เพิ่มบรรทัดนี้เพื่อระบุว่าเป็น Client Component

import { useState } from 'react';
import { roomData } from '../../constants/index';

function RoomCard({ room, onSelect, isSelected }) {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden w-[1000px]">
      <div className="flex items-center">
        <div className="w-1/2 p-4 cursor-pointer" onClick={() => onSelect(room)}>
          <h2 className="text-xl font-semibold">{room.title}</h2>
          <p className="text-gray-600">{room.description}</p>
          <p className="text-lg font-bold mt-2">${room.price} per night</p>
          <p className='text-sm text-gray-500 py-2'>click to see description</p>
        </div>
        <div className="w-1/2">
          <img src={room.image} alt={room.title} className="w-full h-48 object-cover cursor-pointer" onClick={() => onSelect(room)} />
        </div>
      </div>
      {isSelected && (
        <div className="p-4">
          <h3 className="text-lg font-bold">รายละเอียดห้อง:</h3>
          <ul className="list-disc ml-5">
            {room.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelectRoom = (room) => {
    setSelectedRoom(selectedRoom === room ? null : room); // Toggle room details
  };

  return (
    <div className="p-6 space-y-4 flex flex-col items-center py-28">
      <h1 className="text-3xl font-bold mb-6">Our Rooms</h1>
      {roomData.map((room) => (
        <RoomCard
          key={room.title}
          room={room}
          onSelect={handleSelectRoom}
          isSelected={selectedRoom === room}
        />
      ))}
    </div>
  );
}

export default Rooms;
