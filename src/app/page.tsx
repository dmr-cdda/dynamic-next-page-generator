"use client"

import { CompoDataTypes, compoData as cData } from "@/data";
import { components } from "@/data/components";
import Head from "next/head";
import { useEffect, useState } from "react";


export default function Home() {
  const [compoData, setCompoData] = useState<CompoDataTypes>(cData);


  useEffect(() => {
    setCompoData(cData);
    
  }, []);
  

  // Convert data to React components
  const SpecificComponentLayout = components[compoData.layout];
  const SpecificComponentParent = components[compoData.parent];

  
  if (compoData.permission?.guest && components[compoData.layout]) { // Checking permission and component existence
    return (
      <> 
        <Head>{/* Error : Head not working */}
          <title>{compoData.meta.title}</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        
        <SpecificComponentLayout>{/* Page layout */}
          
          <SpecificComponentParent description={compoData?.description}>{/* Parent component */}
            {/* Mapping through contents / childs */}

            {compoData?.content?.map((component) => {
              const Child = components[component.name]; {/*Extract and convert to child component*/}
              const { id, name, ...props } = component; {/* Formatting data props without default id and name */}
              
              if (components[component.name]) {// Checking component existence and render components
                return <Child key={id} {...props} functions={cData.functions} />;
              }

              return null; // Or handle the case where the component doesn't exist
            })}
            
          </SpecificComponentParent>

        </SpecificComponentLayout>
      </>
    );
  }

  return null;
}

