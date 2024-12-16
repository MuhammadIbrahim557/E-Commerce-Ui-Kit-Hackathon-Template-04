
import React from "react";

const NewsletterSection: React.FC = () => {
  const sectionStyle: React.CSSProperties = {
    backgroundImage: `url('/background.png')`,
    width:"1920px",
    height:"462px",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px 0',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle}>
      <div className=" mt-16  " style={{  padding: '30px' }}>
        <h2 className=" text-[#151875] text-4xl font-bold mb-4">Get Latest Updates By Subscribe</h2>
        <h2 className=" text-4xl font-bold text-[#151875] mb-6">Our NewsLetter</h2>
        <form>
       
        <button className=" w-[173px] h-[49] mt-6 bg-pink-500 text-white px-6 py-3  text-lg shadow-lg hover:bg-pink-400 transition duration-300">
            Shop Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
