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

  // Checking permission and component existence
  if (compoData.permission?.guest && components[compoData.layout]) { 
    return (
      <>
        <Head>
          <title>{compoData.meta.title}</title>
          <meta property="og:title" content="My page title" key="title" />
        </Head>
        <SpecificComponentLayout>
          {/* Parent component */}
          <SpecificComponentParent description={compoData?.description}>
            {compoData?.content?.map((component) => {
              const Child = components[component.name];
              const { id, name, ...props } = component;
              // Checking component existence and render components
              if (components[component.name]) {
                return <Child key={id} {...props} />;
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

