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

    return (
        <Converter converterType="length" units={units} unitValuesMap={unitValuesMap} />
    )
}

export default LenghtConverter