import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import Conversion from "./Conversion";

const Headers = () => {
  const typesArr = [
    "Length",
    "Temperature",
    "Weight",
    "Volume",
    "Area",
    "Land",
  ];

  return (
    <div>
      <TabView>
        {typesArr.map((typ) => {
          return (<TabPanel key={typ} header={typ}>
            <Conversion type={typ}/>
          </TabPanel>);
        })}
      </TabView>
    </div>
  );
};

export default Headers;
