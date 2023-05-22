import React from 'react'

const Content = (props : any) => {
  const { title, description, functions } = props;

          //   {
          //     Iterate over the properties of the `functions` object
          //   Object.entries(compoData.functions).forEach(([key, value]) => {
          //     // Check if the value is a function
          //     if (typeof value === 'function') {
          //       // Render a button for each function dynamically
          //       return (
          //         <button key={key} onClick={() => value(5, 6)}>
          //           Call {key} function
          //         </button>
          //       );
          //     }
          //     return null;
          //   })
          // }
  
  
  
  return (
          <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-100">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
  )
  
  // const fc = () => {
  //   const bb = Object.entries(functions).find(([key, value]) => {
  //     // Check if the value is a function
  //     if (typeof value === 'function') return value;
    
  //   });
  //   return bb[1]
  // }

  // console.log(fc()(5,9));
  

  // return <div>My Component</div>;
}

export default Content