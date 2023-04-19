import React from 'react';
import Image from 'next/image';
import myImage from '../../public/images/section.png';
const Section = () => {
  return (
    <section className='section'>
         
     <view>
      <div>
      <Image src={myImage} alt="Logo" width={100} height={50} />
      </div>
     <p className='parra1'>  EMPECEMOS A HACER LO SENCILLO</p>
      <p>NOS EMOCIONA IMPULSAR TU TRANFORMACION DIGITAL</p>
     </view>
     
    </section>
  );
}

export default Section;
