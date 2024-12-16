import React from 'react'
import Image from 'next/image';
const ShopexOffer = () => {
  return (
    <div>

       <section className="container mx-auto px-6 py-16 text-center">
         <h2 className="text-3xl font-bold text-[#151875]  mb-12">What Shopex Offer!</h2>
         <div className="w-[1177px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {[
             { icon: "/icon1.svg", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
             { icon: "/icon2.svg", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
             { icon: "/icon3.svg", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
             { icon: "/icon4.svg", title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida." },
           ].map((offer, index) => (
             <div key={index} className="bg-white shadow-lg rounded-lg p-6 w-[270px] h-[320px]">
               <div className="flex justify-center items-center">
                 <Image src={offer.icon} alt={offer.title} width={65} height={65} />
               </div>
               <h3 className="text-lg font-bold text-gray-800 mt-4">{offer.title}</h3>
               <p className="text-gray-500 mt-2">{offer.description}</p>
             </div>
           ))}
         </div>
       </section>
       
        
            </div>
          );
        }


export default ShopexOffer