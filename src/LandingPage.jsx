import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const logoContainer = document.querySelector('.logo-container');
    const textContainer = document.querySelector('.text-container');

    setTimeout(() => {
      logoContainer.style.top = '10%';
      logoContainer.style.transform = 'scale(1.08)';
      textContainer.style.opacity = '1';
    }, 1000);
  }, []);

  const handleStartVoting = () => {
    // Navigate to the next screen when the button is clicked
    navigate('/votingForm'); // Use navigate function to go to '/votingForm' route
    console.log("Button clicked!"); 
  };
  
  return ( 
    <div class='px-5 pt-10'>
      <div className='flex flex-col items-center space-y-5 px-10'>
        <div class='logo-container'>
          <div className="flex justify-center top-5">
              <img className="w-9/12 lg:w-11/12 h-auto" src="https://councilpcshsst.vercel.app/logo.svg" alt="School Logo" />
          </div>
        </div>
      </div>
      <div className="text-container">
        <div className="flex flex-col items-center space-y-5">
          <div className='whitespace-pre pt-5'>
            <h1 className="text">Popular Student 
            Voting
            </h1>
            <h1 id='test'></h1>
            <script>document.getElementById("test").innerHTML = data</script>
          </div>
          <div className='content-center' id='button'>
            {/* Attach onClick event handler */}
            <button onClick={handleStartVoting} className='px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg'> Start Voting!</button>
          </div>
        </div>      
      </div>
    </div>
  );
};

export default LandingPage;
