import Converter from "./Converter"

const units: Array<string> = [
    "feet",
    "inch",
    "centimeter",
    "meter"
]

const unitValuesMap: Map<string, Map<string, number>> = new Map([
    ["feet", new Map([
        ["feet", 1],
        ["inch", 12],
        ["centimeter", 30.48],
        ["meter", 0.3048]
    ])],
    ["inch", new Map([
        ["feet", 1 / 12],
        ["inch", 1],
        ["centimeter", 2.54],
        ["meter", 0.0254]
    ])],
    ["centimeter", new Map([
        ["feet", 1 / 30.48],
        ["inch", 1 / 2.54],
        ["centimeter", 1],
        ["meter", 0.01]
    ])],
    ["meter", new Map([
        ["feet", 1 / 0.3048],
        ["inch", 1 / 0.0254],
        ["centimeter", 100],
        ["meter", 1]
    ])]
])


export const LenghtConverter = () => {

    function handleConvert(value: number, fromUnit: string, toUnit: string): number | undefined {
        console.log("Converting from", fromUnit, "to", toUnit, "with value", value);
        if (!fromUnit || !toUnit || value === undefined) {
            return;
        }
        const fromUnitValue = unitValuesMap.get(fromUnit.toLowerCase());
        const converted = value * fromUnitValue?.get(toUnit.toLowerCase())!;
        return converted;
    }

    return (
        <Converter converterType="length" units={units} handleConvert={handleConvert} />
    )
}

export default LenghtConverter