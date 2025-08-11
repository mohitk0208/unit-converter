import { useEffect, useState, type ChangeEvent } from "react"

const units = {
    feet: "feet",
    inch: "inch",
    centimeter: "centimeter",
    meter: "meter"
}

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

    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");
    const [value, setValue] = useState<number>();
    const [isAutoConvertEnabled, setIsAutoConvertEnabled] = useState(false);
    const [convertedValue, setConvertedValue] = useState<number>();

    function onValueChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()

        setValue(e.target.valueAsNumber)
    }

    function handleConvert() {

        console.log("Converting from", fromUnit, "to", toUnit, "with value", value);

        if (!fromUnit || !toUnit || value === undefined) {
            return;
        }

        const fromUnitValue = unitValuesMap.get(fromUnit.toLowerCase());
        const converted = value * fromUnitValue?.get(toUnit.toLowerCase())!;

        setConvertedValue(converted);
    }

    useEffect(() => {

        if (isAutoConvertEnabled) {
            handleConvert();
        }

    }, [value, fromUnit, toUnit, isAutoConvertEnabled]);

    return (
        <div className="border w-fit py-2 px-4 rounded">
            <h1 className="font-bold text-center py-2 text-lg">Length Converter</h1>
            <div className="flex flex-col gap-5 my-2">
                <div>
                    <label>
                        <p>Enter the length to convert</p>
                        <input type="number" className="border rounded" value={value} onChange={onValueChange} />
                    </label>
                </div>

                <div>
                    <label htmlFor="fromUnit">
                        <p>select the unit to convert from: </p>
                        <select className="border rounded" name="fromUnit" id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                            <option>Choose from unit</option>
                            {Object.values(units).map((unit) => <option value={unit}>{unit}</option>)}
                        </select>
                    </label>
                </div>

                <div>
                    <label htmlFor="toUnit">
                        <p>select the unit to convert to: </p>
                        <select className="border rounded" name="toUnit" id="toUnit" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                            <option>Choose To unit</option>
                            {Object.values(units).map((unit) => <option value={unit}>{unit}</option>)}
                        </select>
                    </label>
                </div>

                <div>
                    <label htmlFor="isAutoCompleteEnabled" className="flex gap-1 items-center text-md" onClick={(e) => setIsAutoConvertEnabled(!isAutoConvertEnabled)}>
                        <input type="checkbox" name="isAutoConvertEnabled" id="isAutoConvertEnabled" checked={isAutoConvertEnabled} />
                        <span>Auto convert the value.</span>
                    </label>
                    {!isAutoConvertEnabled && <button type="button" className="border py-0.5 px-2 rounded font-semibold" onClick={(e) => handleConvert()}>Convert</button>}
                </div>
            </div>

            <div>
                <p className="font-bold text-md">Converted Value </p>
                <p>{convertedValue}</p>
            </div>
        </div>
    )
}

export default LenghtConverter