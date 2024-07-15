'use client';

import React from 'react';

interface TestimonialItem {
  text: string;
  rating: number;
  client_name: string;
  image_url: string;
}

interface pageProps {
  title: string;
  items: TestimonialItem[];
  sectionImageUrl: string;
}

const team: React.FC<pageProps> = ({ title, items }) => {
  return (
    <section>
      <div className="max-w-screen-md mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-1 gap-8">
          {items?.map((item, index) => (
            <figure key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <img
                src={item.image_url}
                alt={item.client_name}
                className="w-full h-64 object-cover rounded-t-lg mb-4"
              />
              <blockquote className="text-gray-500 dark:text-gray-300">
                <p className="mb-2">{item.text}</p>
                <figcaption className="font-semibold text-gray-900 dark:text-white">
                  {item.client_name}
                </figcaption>
                <div className="text-yellow-500">
                  {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
                </div>
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


export default team;