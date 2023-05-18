"use client";

import { CompoDataTypes, compoData as cData} from "@/data";
import { components } from "@/data/components";
import { useEffect, useState } from "react";

export default function Home() {
  const [compoData, setCompoData] = useState<CompoDataTypes>(cData);

  useEffect(() => {
    setCompoData(cData)
  }, []);

  console.log(compoData);
  
  
  const SpecificComponentLayout = components[compoData.layout];
  const SpecificComponent = components[compoData.parent];

  

  if(compoData.permission?.guest) return <SpecificComponentLayout>
      <SpecificComponent description={compoData?.description}>
        {compoData?.content?.length && compoData.content.map((d, i) => {
          const Child = components[d];

          return <Child key={i} description={`${compoData.description}- child ${i+1} - ${d}`}/>
        })}
    </SpecificComponent>
  </SpecificComponentLayout>

  return null

};
