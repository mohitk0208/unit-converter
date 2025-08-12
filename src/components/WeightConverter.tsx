import Converter from "./Converter";

const units: string[] = ["kilogram", "gram"]

const unitValuesMap: Map<string, Map<string, number>> = new Map([
    ["kilogram", new Map([
        ["kilogram", 1],
        ["gram", 1000]
    ])],
    ["gram", new Map([
        ["kilogram", 0.001],
        ["gram", 1]
    ])]
]);


function WeightConverter() {

    function handleConvert(value: number, fromUnit: string, toUnit: string): number | undefined {
        if (!fromUnit || !toUnit || value === undefined) {
            return;
        }

        const fromUnitValue = unitValuesMap.get(fromUnit.toLowerCase());
        const converted = value * fromUnitValue?.get(toUnit.toLowerCase())!;
        return converted;
    }

    return(
        <Converter converterType="Weight" units={units} handleConvert={handleConvert} />
        )
}

export default WeightConverter