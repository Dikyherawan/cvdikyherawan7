import Image from 'next/image';
import React from 'react';

// Data Hobi
const hobbies = [
  { name: 'Photography', image: '/images/hobi1.jpg', description: 'Capturing moments through the lens.' },
  { name: 'Playing Game', image: '/images/hobi2.jpeg', description: 'Immersing in virtual worlds.' },
  { name: 'Basketball', image: '/images/hobi3.jpeg', description: 'Enjoying teamwork and competition.' },
  { name: 'Travelling', image: '/images/hobi4.jpeg', description: 'Exploring new places and cultures.' },
];

const HobbiesGallery = () => {
  return (
    <section className="card bg-base-200 shadow-xl rounded-lg p-6">
      <div className="card-body">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Hobbies Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-lg rounded-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <figure className="overflow-hidden">
                <Image
                  src={hobby.image}
                  alt={hobby.name}
                  width={256} // Meningkatkan lebar gambar agar lebih jernih
                  height={256} // Meningkatkan tinggi gambar agar lebih jernih
                  className="w-full h-40 md:h-52 object-cover transition-transform duration-300 hover:scale-110"
                  quality={80} // Mengatur kualitas gambar
                />
              </figure>
              <div className="card-body text-center p-4">
                <h3 className="text-lg font-semibold text-base-content">{hobby.name}</h3>
                <p className="text-sm text-base-content mt-2">{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-base-300 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full">
        <HobbiesGallery />
      </div>
    </div>
  );
};

export default App;
