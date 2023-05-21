import React from 'react';
import sun from '../../sun-icon.png';
// function Sun() {
//   return <img />;
// }

const Sun = () => {
  return (
    <div className='containerImg'>
      <img src={sun} alt='logo of sun' className='logo' />
    </div>
  );
};

export default Sun;
