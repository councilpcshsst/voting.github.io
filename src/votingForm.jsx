import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style/tailwind.css';
import './style/testPage.css'

const NextPage = () => {
  const [input_token, setinput_token] = useState();
  const [mattanValue, setMattanValue] = useState('');
  const [matplaiValue, setMatplaiValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if both mandatory fields are filled
    if (mattanValue.trim() === '' || matplaiValue.trim() === '') {
      alert('Please fill in both mandatory fields (มอต้น and มอปลาย)');
    } else {
      // Store user's IP address in localStorage
      localStorage.setItem('userIP', window.location.hostname);
  
      // Check Token validity
      try {
        const response = await axios.get(`https://sheetdb.io/api/v1/os9cv595lvvrg/search?token=${input_token}&single_object=true`);
        const token_id = response.data.token;
        const token_usage = response.data.usage;
        

        console.log(token_usage,token_id); 
  
        // Check if the Token from the API matches the input Token
        if (token_id === input_token && token_usage === 'FALSE') {
          console.log(`Token id is ${token_id}, input token is ${input_token}`);

          // update data from POST
          fetch(`https://sheetdb.io/api/v1/os9cv595lvvrg/token/${input_token}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    'popular_1': mattanValue,
                    'popular_4': matplaiValue,
                    'message': messageValue,
                    'usage': "true"
                }
            })
        })
  //.then((response) => response.json())
  //.then((data) => console.log(data));
          // Redirect user to LandingPage
          navigate('/');
        } else {
          alert('Error : Token ไม่ถูกต้อง/ได้ถูกใช้งานแล้ว โปรดติดต่อพี่สภา');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while checking the Token. Please try again later.');
      }
    }
  };

  // Check if the form has been submitted before
    return (
      <div class='container'>
        <div class='px-5 pt-5'>
          <div className="px-10 py-5 border rounded-2xl overflow-hidden">
            <h1 className="font-Prompt text-center justify-center item-center text-2xl font-bold mb-4 whitespace">ขวัญใจชาวค่าย<br></br>
            ระดับ ม.1
            </h1>
              <form method="post" onSubmit={handleSubmit}>
                <div id='' className="mb-6">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="mattan">Voting Token<br></br></label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="token"
                    type="text"
                    placeholder="โปรดใส่ Token 6 หลักที่คุณได้รับ "
                    value={input_token}
                    onChange={(e) => setinput_token(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="mattan">มัธยมต้น *</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="mattan"
                    type="text"
                    placeholder="ใส่ชื่อขวัญใจชาวค่าย - มัธยมต้น"
                    onChange={(e) => setMattanValue(e.target.value)}
                    value={mattanValue}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="matplai">มัธยมปลาย *</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="matplai"
                    type="text"
                    placeholder="ใส่ชื่อขวัญใจชาวค่าย - มัธยมปลาย"
                    onChange={(e) => setMatplaiValue(e.target.value)}
                    value={matplaiValue}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="message">กรอกข้อความที่อยากบอกพี่สภาได้เลย!!</label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="กรอกข้อความให้พี่สภา ex. รักนะฉึกๆ อ้ะไม่ช่ายย"
                    onChange={(e) => setMessageValue(e.target.value)}
                    value={messageValue}
                  />
                </div>
                <div class="flex justify-center pb-5 whitespace-pre font-bold text-red-600">
                  <h4>! โปรดตรวจสอบข้อมูลของท่านก่อนส่ง ! <br></br></h4>
                </div>
                <div className="flex justify-center">
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                    type="submit"
                  >
                    ส่งคะแนนโหวต
                  </button>
                </div>
              </form>
              <h6 class='text-center justify-center item-center color-gray-300 text-md pt-2 whitespace-pre-line' >จัดทำโดย สภานักเรียนจภ.สตูล 66-67</h6>
          </div>
        </div>
      </div>
  );
};

export default NextPage;
