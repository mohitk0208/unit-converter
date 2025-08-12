import Converter from "./Converter";

const units: Array<string> = [
    "celsius",
    "fahrenheit",
    "kelvin"
];

function TemperatureConverter() {

    function handleConvert(value: number, fromUnit: string, toUnit: string): number | undefined {
        if (!fromUnit || !toUnit || value === undefined) {
            return;
        }

        let convertedValue = value;
        
        // Adjust for temperature conversions
        if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            convertedValue = (convertedValue * 9 / 5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            convertedValue = (convertedValue - 32) * 5 / 9;
        } else if (fromUnit === "celsius" && toUnit === "kelvin") {
            convertedValue += 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            convertedValue -= 273.15;
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            convertedValue = ((convertedValue - 32) * 5 / 9) + 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            convertedValue = ((convertedValue - 273.15) * 9 / 5) + 32;
        }

        return convertedValue;
    }

    return (
        <Converter converterType="Temperature" units={units} handleConvert={handleConvert} />
    )
}

export default TemperatureConverter;