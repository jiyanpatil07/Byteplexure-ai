import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  image_url: string;
}

interface PageProps {
  title: string;
  items: FeatureItem[];
  sectionImageUrl: string;
}

const feature: React.FC<PageProps> = ({ title, items, sectionImageUrl }) => {
  return (
    <section style={{ backgroundImage: `url(${sectionImageUrl})` }} className="py-16 bg-cover bg-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
          {title}
        </h2>
        <div className="mt-6 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <img src={item.image_url} alt={item.title} className="w-full h-64 object-cover rounded-t-lg" />
              <h3 className="text-xl leading-7 font-semibold text-gray-900 dark:text-white mt-4">
                {item.title}
              </h3>
              <p className="text-base leading-6 text-gray-500 dark:text-gray-300 mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default feature;
