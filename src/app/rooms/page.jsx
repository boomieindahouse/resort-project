// src/app/rooms/page.jsx

"use client"; // ระบุว่าเป็น client component

import React, { useState } from 'react'; // นำเข้า React และ useState
import { roomData } from '../constants/index';

function RoomCard({ room, onSelect }) {
  return (
    <div className="flex border rounded-lg shadow-lg overflow-hidden cursor-pointer mb-4" onClick={() => onSelect(room)}>
      <div className="p-4 flex-1">
        <h2 className="text-2xl font-bold">{room.title}</h2>
        <ul className="mt-2 list-disc pl-5 text-gray-700">
          <li>{room.details[0]}</li>
          <li>{room.details[1]}</li>
          <li>{room.details[2]}</li>
          <li>{room.details[3]}</li>
          <li>{room.details[4]}</li>
        </ul>
        <p className="text-lg font-bold mt-4">${room.price} per night</p>
      </div>
      <img src={room.image} alt={room.title} className="w-48 h-48 object-cover" />
    </div>
  );
}

function RoomDetails({ room }) {
  return (
    <div className="mt-4 border-t pt-4">
      <h2 className="text-2xl font-bold">{room.title}</h2>
      <img src={room.image} alt={room.title} className="w-full h-48 object-cover" />
      <p className="text-gray-600 mt-2">{room.description}</p>
      <p className="text-lg font-bold mt-2">${room.price} per night</p>
      <p className="mt-2">Amenities: Free Wi-Fi, Air Conditioning, Mini Bar, TV</p>
      <p className="mt-2">Check-in: 3:00 PM</p>
      <p className="mt-2">Check-out: 11:00 AM</p>
    </div>
  );
}

function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(null); // ใช้ useState ที่นี่

  const handleSelectRoom = (room) => {
    setSelectedRoom(selectedRoom === room ? null : room); // Toggle room details
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6"> {/* ปรับเป็น 1 คอลัมน์สำหรับแต่ละห้อง */}
        {roomData.map((room, index) => (
          <RoomCard key={index} room={room} onSelect={handleSelectRoom} />
        ))}
      </div>
      {selectedRoom && <RoomDetails room={selectedRoom} />}
    </div>
  );
}

export default Rooms;
