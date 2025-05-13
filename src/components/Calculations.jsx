import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import {
  areaArr,
  landArr,
  lengthArr,
  tempArr,
  volumeArr,
  weightArr,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  inchesToCentimeters,
  feetToMeters,
  yardsToMeters,
  milesToKilometers,
  ouncesToGrams,
  poundsToKilograms,
  stonesToKilograms
} from "../lib/conversions";

const Calculations = (props) => {
  const { type } = props;
  const [selectedType, setSelectedType] = useState(null);
  const [convertArr, setConvertArr] = useState([]);
  const [convertInput, setConvertInput] = useState(0);
  const [conversionResult, setConversionResult] = useState(0);

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

  const calcConversion = () => {
    console.log(selectedType);
    switch (selectedType) {
      case "Celsius to Fahrenheit":
        setConversionResult(celsiusToFahrenheit(convertInput));
        break;
      case "Fahrenheit to Celsius":
        setConversionResult(fahrenheitToCelsius(convertInput));
        break;
      case "Feet to Meters":
        setConversionResult(feetToMeters(convertInput));
        break;
      case "Inches to Centimeters":
        setConversionResult(inchesToCentimeters(convertInput));
        break;
      case "Yards to Meters":
        setConversionResult(yardsToMeters(convertInput));
        break;
      case "Miles to Kilometers":
        setConversionResult(milesToKilometers(convertInput));
        break;
      case "Ounces to Grams":
        setConversionResult(ouncesToGrams(convertInput));
        break;
      case "Pounds to Kilograms":
        setConversionResult(poundsToKilograms(convertInput));
        break;
      case "Stones to Kilograms":
        setConversionResult(stonesToKilograms(convertInput));
        break;
    }
  };

  return (
    <div>
      <Dropdown
        value={selectedType}
        onChange={(e) => {
          setSelectedType(e.value);
          setConversionResult(0);
        }}
        options={convertArr}
        optionLabel="name"
        placeholder="Conversion method"
        className="w-full md:w-14rem"
      />
      {!selectedType ? (
        <></>
      ) : (
        <div>
          <label htmlFor="convertInput" className="font-bold block mb-2">
            {selectedType}
          </label>
          <InputNumber
            id="convertInput"
            value={convertInput}
            onValueChange={(e) => setConvertInput(e.value)}
            minFractionDigits={2}
          />
          <div>
            <label htmlFor="result" className="font-bold block mb-2">
              Result
            </label>
            <InputNumber
              id="result"
              value={conversionResult}
              minFractionDigits={2}
              readOnly
            />
          </div>
          <div>
            <Button onClick={calcConversion}>Convert</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calculations;
