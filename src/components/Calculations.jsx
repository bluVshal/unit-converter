import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { areaArr,landArr, lengthArr, tempArr, volumeArr, weightArr } from "../lib/conversions";

const Calculations = (props) => {
  const { type } = props;
  const [selectedType, setSelectedType] = useState(null);
  const [convertArr, setConvertArr] = useState([]);

  useEffect(() => {
    populateConvertArray();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const populateConvertArray = () => {
    switch (type) {
      case "Length":
        setConvertArr(lengthArr);
        break;
      case "Temperature":
        setConvertArr(tempArr);
        break;
      case "Area":
        setConvertArr(areaArr);
        break;
      case "Weight":
        setConvertArr(weightArr);
        break;
      case "Volume":
        setConvertArr(volumeArr);
        break;
      case "Land":
        setConvertArr(landArr);
        break;
    }
  };

  return (
    <div>
      <Dropdown
        value={selectedType}
        onChange={(e) => setSelectedType(e.value)}
        options={convertArr}
        optionLabel="name"
        placeholder="Conversion method"
        className="w-full md:w-14rem"
      />
    </div>
  );
};

export default Calculations;
