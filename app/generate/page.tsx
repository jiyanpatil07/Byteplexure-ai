
  // "use client"
  // import React, { useEffect } from 'react';
  // import axios from 'axios';

  // export default function Page({ searchParams }: { searchParams?: any }) {
  //     const { fullname, description } = searchParams;

  //     useEffect(() => {
  //         if (fullname && description) {
  //             const fetchData = async () => {
  //                 try {
  //                     const response = await axios.post('http://174.138.122.237:8000/generate', {
  //                         user_id: 'user_id',  // Replace this with the actual user ID if available
  //                         business_name: fullname,
  //                         short_description: description,
  //                     });
  //                     console.log(response.data);
  //                 } catch (error) {
  //                     console.error('Error fetching data:', error);
  //                 }
  //             };

  //             fetchData();
  //         }
  //     }, [fullname, description]);

  //     return (
  //         <>
  //             <div>Full name is {fullname}</div>
  //             <div>Description is {description}</div>
  //         </>
  //     );
  // }

  // pages/generate.tsx
  // 'use client'
  // import React, { useEffect, useState } from 'react';
  // import { useRouter } from 'next/navigation'
  // import HeroSection from './page';
  // // import Features from '../components/Features';
  // // import Testimonials from '../components/Testimonials';
  // // import ContactForm from '../components/ContactForm';

  // const page = () => {
  //   const router = useRouter();
  //   const { fullName, description } = router.query;

  //   const [data, setData] = useState(null);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fetch('http://174.138.122.237:8000/generate', {
  //         method: 'POST',
  //         headers: { 'Content-Type': 'application/json' },
  //         body: JSON.stringify({
  //           user_id: 'user_id',
  //           business_name: fullName,
  //           short_description: description,
  //         }),
  //       });
  //       const result = await response.json();
  //       setData(result);
  //     };

  //     if (fullName && description) {
  //       fetchData();
  //     }
  //   }, [fullName, description]);

  //   if (!data) {
  //     return <div>Loading...</div>;
  //   }

  //   return (
  //     <>
  //       {data.response.map((section, index) => {
  //         if (!section) return null;

  //         switch (section.type) {
  //           case 'hero_section':
  //             return (
  //               <HeroSection
  //                 key={index}
  //                 title={section.title}
  //                 items={section.items}
  //                 sectionImageUrl={section.section_image_url}
  //               />
  //             );
  //           case 'features':
  //             return (
  //               <Features
  //                 key={index}
  //                 title={section.title}
  //                 items={section.items}
  //                 sectionImageUrl={section.section_image_url}
  //               />
  //             );
  //           case 'testimonial':
  //             return (
  //               <Testimonials
  //                 key={index}
  //                 title={section.title}
  //                 items={section.items}
  //                 sectionImageUrl={section.section_image_url}
  //               />
  //             );
  //           case 'contact_form':
  //             return (
  //               <ContactForm
  //                 key={index}
  //                 title={section.title}
  //                 items={section.items}
  //                 contactDetails={section.contact_details}
  //                 sectionImageUrl={section.section_image_url}
  //               />
  //             );
  //           default:
  //             return null;
  //         }
  //       })}
  //     </>
  //   );
  // };

  // export default page;
  // pages/generate.tsx


'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import HeroItem, { HeroItem as HeroItemType } from '../../components/hero/hero';
import Feature from '../../components/features/feature';
import ContactForm from '../../components/contact/contact';
import Nav from '../../components/nav/nav';
import Testimon from '../../components/team/team';
import  Footer from '../../components/footer/footer';
import { time } from 'console';
import Loader from '../../components/loader/loader';


interface ApiResponse {
  response: Array<{
    title: string;
    type: string;
    items: any[];
    section_image_url: string;
    contact_details?: {
      address: string;
      phone: string;
      email: string;
    };
  } | null>;
}
interface FeatureItem {
  title: string;
  description: string;
  image_url: string;
}

interface TestimonialItem {
  text: string;
  rating: number;
  client_name: string;
  image_url: string;
}

interface ContactItem {
  label: string;
  type: string;
  required: boolean;
}

interface ContactDetails {
  address: string;
  phone: string;
  email: string;
}

interface Section {
  title: string;
  type: string;
  items: any[];
  section_image_url: string;
  contact_details?: ContactDetails;
}

interface Props {
  sections: Section[];
}

const Generate = () => {
  const searchParams = useSearchParams();
  const [fullName, setFullName] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);
  const [apiData, setApiData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    const fullNameParam = searchParams.get('fullname');
    const descriptionParam = searchParams.get('description');
    if (fullNameParam && descriptionParam) {
      setFullName(fullNameParam);
      setDescription(descriptionParam);
    }
  }, [searchParams]);
  const fullNameParam2 = searchParams.get('fullname');
  useEffect(() => {
    const fetchData = async () => {
      if (!fullName || !description) return;

      try {
        const response = await fetch('http://174.138.122.237:8000/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: 'user_id',
            business_name: fullName,
            short_description: description,
          }),
        });
        const result = await response.json();
        console.log(result);
        setApiData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fullName, description]);
  
  if (!apiData) {
    return <Loader />;
  }

  return (
    <>
      {apiData.response.map((section, index) => {
        if (!section) return null;

        switch (section.type) {
          case 'hero_section':
            return (
              <>
            <Nav title={fullNameParam2 || 'Default Title'}/> 
              <HeroItem
                key={index}
                title={section.title}
                items={section.items as HeroItemType[]}
                sectionImageUrl={section.section_image_url}
              />
              </>
            );
            case 'features':
              return (
                <Feature
                  key={index}
                  title={section.title}
                  items={section.items as FeatureItem[]}
                  sectionImageUrl={section.section_image_url}
                />
              );
          case 'testimonial':
            // Placeholder for testimonial section
            return (
              <Testimon 
              key={index}
              title={section.title}
              items={section.items as TestimonialItem[]}
              sectionImageUrl={section.section_image_url}
              />
            );
          case 'contact_form':
            return <ContactForm key={index} />;
          default:
            return null;
        }
      })} 
          <Footer title={fullNameParam2 || 'Default Title'}/>
    </>
  );
};

const Page = () => (
  <Suspense fallback={<Loader />}>
    <Generate />
  </Suspense>
);

export default Page;