import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='bg-dark text-light pt-5' style={{ height: '100vh' }}>
        <div className='container'>
          <h1>Happy New Year 2023</h1>
          <p>Wishing you a very happy new year.</p>

          <Link to='/wishing-you-a-happy-new-year-2023/name?q=Himanshu' className='btn btn-primary mr-3'>
            Developer
          </Link>
          
        </div>
      </div>
    </>
  );
};

export default Home;
