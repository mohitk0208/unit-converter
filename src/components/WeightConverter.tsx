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
    return(
        <Converter converterType="Weight" units={units} unitValuesMap={unitValuesMap} />
        )
}

export default WeightConverter