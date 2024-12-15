'use client'; // Menandai komponen ini sebagai client component

import { useState, useEffect } from "react";
import Image from 'next/image';
import React from 'react';
import { StarON, StarOFF } from '../../../public'; // Import gambar bintang

function Latest() {
  // State untuk menyimpan data hidangan dari API
  const [dataDishes, setDataDishes] = useState([]);

  // Fungsi untuk mengambil data dari API
  async function getData() {
    const url = "https://classic-autumn-snowdrop.glitch.me/dishes"; // Endpoint untuk data hidangan
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);

      setDataDishes(json); // Menyimpan data hidangan ke state
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    // Memanggil getData saat komponen pertama kali dimuat
    getData();
  }, []);

  // Manual jumlah bintang per hidangan
  const starsPerDish = [4, 5, 3, 4]; // Jumlah bintang untuk setiap hidangan (sesuaikan)

  return (
    <section className='popular'>
      {/* Header Section */}
      <div className='flex justify-between items-center p-10'>
        <h2>Latest Dishes</h2>
        <a href="#">View all</a>
      </div>

      {/* Grid Section */}
      <div className='pl-10 pr-10 grid grid-cols-4 gap-4'>
        {/* Iterasi Data Hidangan */}
        {dataDishes.map((dish, index) => (
          <div key={index} className='dish flex flex-col items-center text-center rounded-xl shadow-md bg-white p-6'>
            {/* Gambar Hidangan */}
            <Image
              alt="Dish Image"
              src={dish.image || '/default-image.jpg'} // Fallback gambar jika tidak ada
              className="rounded-md"
              width={200}
              height={150}
              unoptimized
            />
            {/* Nama Hidangan */}
            <h3 className="mt-3 font-bold text-lg">{dish.name}</h3>
            {/* Rating Manual */}
            <ul className="flex justify-center mt-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i}>
                  <Image
                    alt="star"
                    src={i < starsPerDish[index] ? StarON : StarOFF} // Gunakan StarON dan StarOFF
                    width={20}
                    height={20}
                  />
                </li>
              ))}
            </ul>
            {/* Harga */}
            <p className="text-gray-600 mt-2">Rp {dish.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Latest;
