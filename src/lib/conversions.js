// Temperature conversions
export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};

export const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

// Imperial to Metric - Length
export const inchesToCentimeters = (inches) => inches * 2.54;
export const feetToMeters = (feet) => feet * 0.3048;
export const yardsToMeters = (yards) => yards * 0.9144;
export const milesToKilometers = (miles) => miles * 1.60934;

// Imperial to Metric - Weight
export const ouncesToGrams = (ounces) => ounces * 28.3495;
export const poundsToKilograms = (pounds) => pounds * 0.453592;
export const stonesToKilograms = (stones) => stones * 6.35029;

// Imperial to Metric - Volume
export const fluidOuncesToMilliliters = (flOz) => flOz * 29.5735;
export const pintsToLiters = (pints) => pints * 0.473176;
export const gallonsToLiters = (gallons) => gallons * 3.78541;

// Imperial to Metric - Area
export const squareFeetToSquareMeters = (sqFt) => sqFt * 0.092903;
export const squareYardsToSquareMeters = (sqYd) => sqYd * 0.836127;
export const acresToHectares = (acres) => acres * 0.404686;

// Old French Land Measurements to Metric
export const arpentToSquareMeters = (arpent) => arpent * 3418.89;
export const toiseToMeters = (toise) => toise * 1.949;
export const piedToMeters = (pied) => pied * 0.3248;
export const pouceToCentimeters = (pouce) => pouce * 2.707;
export const ligneToMillimeters = (ligne) => ligne * 2.256;

// Conversion options organized by category
export const conversionOptions = {
  temperature: [
    { from: "Celsius", to: "Fahrenheit", convert: celsiusToFahrenheit },
    { from: "Fahrenheit", to: "Celsius", convert: fahrenheitToCelsius },
  ],

  length: [
    { from: "Inches", to: "Centimeters", convert: inchesToCentimeters },
    { from: "Feet", to: "Meters", convert: feetToMeters },
    { from: "Yards", to: "Meters", convert: yardsToMeters },
    { from: "Miles", to: "Kilometers", convert: milesToKilometers },
  ],

  weight: [
    { from: "Ounces", to: "Grams", convert: ouncesToGrams },
    { from: "Pounds", to: "Kilograms", convert: poundsToKilograms },
    { from: "Stones", to: "Kilograms", convert: stonesToKilograms },
  ],

  volume: [
    {
      from: "Fluid Ounces",
      to: "Milliliters",
      convert: fluidOuncesToMilliliters,
    },
    { from: "Pints", to: "Liters", convert: pintsToLiters },
    { from: "Gallons", to: "Liters", convert: gallonsToLiters },
  ],

  area: [
    {
      from: "Square Feet",
      to: "Square Meters",
      convert: squareFeetToSquareMeters,
    },
    {
      from: "Square Yards",
      to: "Square Meters",
      convert: squareYardsToSquareMeters,
    },
    { from: "Acres", to: "Hectares", convert: acresToHectares },
  ],

  frenchLand: [
    { from: "Arpent", to: "Square Meters", convert: arpentToSquareMeters },
    { from: "Toise", to: "Meters", convert: toiseToMeters },
    { from: "Pied", to: "Meters", convert: piedToMeters },
    { from: "Pouce", to: "Centimeters", convert: pouceToCentimeters },
    { from: "Ligne", to: "Millimeters", convert: ligneToMillimeters },
  ],
};

export const lengthArr = ['Inches to Centimeters','Feet to Meters', 'Yards to Meters', 'Miles to Kilometers'];
export const tempArr = ['Celsius to Fahrenheit','Fahrenheit to Celsius'];
export const weightArr = ['Ounces to Grams','Pounds to Kilograms','Stones to Kilograms'];
export const volumeArr = ['Fluid Ounces to Milliliters','Pints to Liters', 'Gallons to Liters'];
export const areaArr = ['Square Feet to Square Meters','Square Yards to Square Meters', 'Acres to Hectares'];
export const landArr = ['Arpent to Square Meters','Toise to Meters', 'Pied to Meters', 'Pouce to Centimeters', 'Ligne to Millimeters'];

