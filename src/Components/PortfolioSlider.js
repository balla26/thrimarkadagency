import React from 'react';
import './Portfolio.css';
function ExampleComponent() {
  const cardData = [
    { title: 'Ad Agency Project', description: 'Using ReactJS' },
    { title: 'Zizmu IT Project', description: 'Using HTML, CSS, Bootstrap' },
    { title: 'Medatech IT Project', description: 'Using JAVA, PHP' },
    { title: 'NOVA Constructions Project', description: 'Digital Marketing' },
    { title: 'Ridere Application', description: 'Using JAVA, Kotlin' },
    { title: 'E-Commerce Project', description: 'E-mail Marketing' },
    { title: 'Admin Project', description: 'Using ReactJS, Node, Mongodb' },
    { title: 'Tech Project', description: 'Google Ads' },
  ];

  return (
    <div className="flex flex-col m-auto p-auto">
    

      {/* <p className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
        Scroll to explore more 
      </p> */}
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
  <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-5">
    {cardData.map((card, index) => (
      <div key={index} className="inline-block px-3">
        <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md card-bg-img hover:shadow-xl text-white transition-shadow text-center duration-300 ease-in-out flex flex-col justify-center">
          <h2 className="text-xl font-semibold mt-3"  style={{ textTransform: 'uppercase' }}>{card.title}</h2>
          <p className="text-xs">{card.description}</p>
        </div>
      </div>


          ))}
        </div>
      </div>
    </div>
  );
}

export default ExampleComponent;
