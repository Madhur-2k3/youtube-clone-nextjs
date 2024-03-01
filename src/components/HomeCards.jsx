// import React from 'react'
// import Card from './Card'

// export default async function HomeCards() {

//     const url = 'https://youtube138.p.rapidapi.com/home/?hl=en&gl=US';
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b3838691c0msh1c4cfc8c3e60284p103a5djsnce23ac222205',
// 		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
//     const main_data=result.contents;
//     // console.log(main_data[0].video.title);
//     // const title=videodata.title;
// 	// console.log(title);
// } catch (error) {
// 	console.error(error);
// }


//   return (
//     <div className='cards'>
        
//         {main_data.map((curElem)=>{
//               return <Card key={curElem.id} {...curElem}/>
//             })
//           }
//     </div>
//   )
// }
'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';

export default function HomeCards() {
  const [mainData, setMainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        // await new Promise((resolve)=>setTimeout(resolve,1500));
      const url = 'https://youtube138.p.rapidapi.com/home/?hl=en&gl=US';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'b3838691c0msh1c4cfc8c3e60284p103a5djsnce23ac222205',
          'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setMainData(result.contents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='cards ml-2 grid grid-cols-4 '>
      {mainData.map((curElem) => (
        <Card key={curElem.id} {...curElem} />
      ))}
    </div>
  );
}

