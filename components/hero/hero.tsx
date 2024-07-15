import Link from 'next/link';
import React from 'react';

interface CallToAction {
  text: string;
  url: string;
}

export interface HeroItem {
  headline: string;
  subheadline: string;
  call_to_action: CallToAction;
  background_image: string;
}

interface pageProps {
  title: string;
  items: HeroItem[];
  sectionImageUrl: string;
}

const hero: React.FC<pageProps> = ({ title, items, sectionImageUrl }) => {
  return (
    // <section style={{ backgroundImage: `url(${sectionImageUrl})` }}>
    //   <h1>{title}</h1>
    //   {items.map((item, index) => (
    //     <div key={index} style={{ backgroundImage: `url(${item.background_image})` }}>
    //       <h2>{item.headline}</h2>
    //       <p>{item.subheadline}</p>
    //       <a href={item.call_to_action.url}>{item.call_to_action.text}</a>
    //     </div>
    //   ))}
    // </section>
    <section className="bg-white dark:bg-gray-900 border-red-500">
  <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <a
      href="#"
      className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
      role="alert"
    >
    </a>
    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
      {items[0].headline}
    </h1>
    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
    {items[0].subheadline}
    </p>
    <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <a
        href="#"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center font-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
      >
        Learn more
        <svg
          className="ml-2 -mr-1 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <Link
        href="#"
        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
      >
       {items[0].call_to_action.text}
    </Link>
    </div>
  
  </div>
</section>

  );
};

export default hero;
