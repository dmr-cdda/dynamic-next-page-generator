"use client";

import { CompoDataTypes, compoData as cData} from "@/data";
import { components } from "@/data/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [compoData, setCompoData] = useState<CompoDataTypes>(cData);

  useEffect(() => {
    setCompoData(cData)
  }, []);
  
  // convert data to react components
  const SpecificComponentLayout = components[compoData.layout];
  const SpecificComponentParent = components[compoData.parent];

  
  // chekcing permission and component exists or not
  if (compoData.permission?.guest && components[compoData.layout]) return <SpecificComponentLayout>
      {/* parent  */}
      <SpecificComponentParent description={compoData?.description}>
        {compoData?.content?.length && compoData.content.map((d, i) => {
          const Child = components[d];
          // child components
          // checking component exists or not and then render components
          if(components[d]) return <Child key={i} description={`${compoData.description}- child ${i+1} - ${d}`}/>
        })}
    </SpecificComponentParent>
  </SpecificComponentLayout>

  return null

};
