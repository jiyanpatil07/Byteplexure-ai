
'use client'
import React, { useState } from 'react';
import Link from 'next/link';
// 
import { useRouter } from 'next/navigation'


const Page = () => {
    const [expanded, setExpanded] = useState(false);
    const [fullName, setFullName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const router = useRouter();

  //   const handleGenerate = () => {
  //     router.push(`/generated`);
  // };
 

    return (
        <>
            <header className="py-4 bg-white sm:py-5">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <nav className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a href="#" title="" className="flex">
                                <img
                                    className="w-auto h-8"
                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/logo.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-900"
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                {expanded ? (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-7 h-7"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-end md:space-x-10">
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
                            >
                                Tour
                            </a>
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
                            >
                                Products
                            </a>
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
                            >
                                Customers
                            </a>
                            <a
                                href="#"
                                title=""
                                className="text-base font-medium text-gray-900 transition-all duration-200 hover:text-indigo-600"
                            >
                                Articles
                            </a>
                        </div>
                    </nav>
                    {expanded && (
                        <nav>
                            <div className="px-1 pt-8 pb-4">
                                <div className="grid gap-y-6">
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                                    >
                                        Tour
                                    </a>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                                    >
                                        Products
                                    </a>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                                    >
                                        Customers
                                    </a>
                                    <a
                                        href="#"
                                        title=""
                                        className="flex items-center text-base font-medium text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0"
                                    >
                                        Articles
                                    </a>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
            <section className="pb-12 bg-white sm:pb-16 lg:pb-20">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="relative py-12 overflow-hidden bg-indigo-600 rounded-xl sm:py-16 lg:py-20">
                        <div className="absolute inset-0">
                            <img
                                className="object-contain object-right w-full h-full transform scale-125"
                                src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                                alt=""
                            />
                        </div>
                        <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                            <div className="relative">
                                <div className="absolute"></div>
                                <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                                    <div className="flex flex-col justify-between lg:col-span-3">
                                        <div>
                                            <h1 className="text-4xl font-bold text-white sm:text-5xl">
                                                
                                                <span className="relative inline">
                                                    <img
                                                        className="absolute top-0 w-auto h-8 -right-8"
                                                        src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/design-element.svg"
                                                        alt=""
                                                    />
                                                    Websites in a minutes
                                                </span>
                                                <br />
                                                inspirations weekly
                                            </h1>
                                            <p className="mt-6 text-base font-normal leading-7 text-white text-opacity-80">
    Ready to transform your business? Enter your business name and description below to get personalized website recommendations and insights!
</p>

                                        </div>
                                        <div className="mt-8 lg:mt-auto">
                                            <div className="flex -space-x-2">
                                                <img
                                                    className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-1.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-2.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-3.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-4.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-5.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-6.png"
                                                    alt=""
                                                />
                                                <img
                                                    className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-7.png"
                                                    alt=""
                                                />
                                            </div>
                                            <p className="mt-4 text-base font-medium text-white">
                                                Join other 3200+ Marketers now
                                            </p>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <p className="text-lg font-bold text-white">Enter the details</p>
                                        <form action="#" method="POST" className="mt-4 space-y-4">
                                            <div>
                                                <label htmlFor="" className="sr-only">
                                                    Full name
                                                </label>
                                                <div className="">
                                                    <input
                                                        type="text"
                                                        name=""
                                                        id=""
                                                        onChange={(e) => setFullName(e.target.value)}

                                                        className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                                                        placeholder="ex: BytePlexure"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="" className="sr-only">
Description                                                </label>
                                                <div className="">
                                                    <input
                                                        type="email"
                                                        name=""
                                                        id=""
                                                        onChange={(e) => setDescription(e.target.value)}

                                                        className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                                                        placeholder="Descriptions"
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative group">
                                                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                                               <Link href={
                                                    {
                                                        pathname: '/generate',
                                                        query: {
                                                            fullname: fullName,
                                                            description: description,
                                                        },
                                                    }
                                               }>
                                                <button
                                                    type="submit"
                                                    

                                                    className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent"
                                                    >
                                                    
                                                    Generate 🎆
                                                </button>
                                                  </Link>
                                            </div>
                                        </form>
                                        <div className="mt-8 sm:mt-12">
                                            <p className="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">
                                                Featured on
                                            </p>
                                            <div className="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
                                                <img
                                                    className="object-contain w-auto h-6"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-1.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="object-contain w-auto h-6"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-2.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="object-contain w-auto h-6"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-3.svg"
                                                    alt=""
                                                />
                                                <img
                                                    className="object-contain w-auto h-6"
                                                    src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-4.svg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Page;
