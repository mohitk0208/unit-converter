import { useEffect, useState, type ChangeEvent } from "react"

interface ConverterProps {
    converterType: string;
    units: Array<string>;
    handleConvert: (value: number, fromUnit: string, toUnit:string) => number | undefined;
}

export const Converter = ({ converterType, units, handleConvert }: ConverterProps) => {

    const [fromUnit, setFromUnit] = useState("");
    const [toUnit, setToUnit] = useState("");
    const [value, setValue] = useState<number>();
    const [isAutoConvertEnabled, setIsAutoConvertEnabled] = useState(false);
    const [convertedValue, setConvertedValue] = useState<number>();

    function onValueChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()

        setValue(e.target.valueAsNumber)
    }

    function convertHandler() {
        setConvertedValue(handleConvert ? handleConvert(value!, fromUnit, toUnit) : undefined);
    }

    useEffect(() => {

        if (isAutoConvertEnabled) {
            convertHandler();
        }

    }, [value, fromUnit, toUnit, isAutoConvertEnabled]);

    return (
        <div className="border w-fit py-2 px-4 rounded">
            <h1 className="font-bold text-center py-2 text-lg">{converterType} Converter</h1>
            <div className="flex flex-col gap-5 my-2">
                <div>
                    <label>
                        <p>Enter the {converterType} to convert</p>
                        <input type="number" className="border rounded" value={value} onChange={onValueChange} />
                    </label>
                </div>

                <div>
                    <label htmlFor="fromUnit">
                        <p>select the unit to convert from: </p>
                        <select className="border rounded" name="fromUnit" id="fromUnit" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                            <option>Choose from unit</option>
                            {units.map((unit) => <option value={unit}>{unit}</option>)}
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
                    <label htmlFor="isAutoCompleteEnabled" className="flex gap-1 items-center text-md" onClick={() => setIsAutoConvertEnabled(!isAutoConvertEnabled)}>
                        <input type="checkbox" name="isAutoConvertEnabled" id="isAutoConvertEnabled" checked={isAutoConvertEnabled} />
                        <span>Auto convert the value.</span>
                    </label>
                    {!isAutoConvertEnabled && <button type="button" className="border py-0.5 px-2 rounded font-semibold" onClick={() => convertHandler()}>Convert</button>}
                </div>
            </div>

            <div>
                <p className="font-bold text-md">Converted Value </p>
                <p>{convertedValue}</p>
            </div>
        </div>
    )
}

export default Converter