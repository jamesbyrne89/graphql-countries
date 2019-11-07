import React from 'react'

const Output = ({
    result
}) => {
console.log(result)
const renderOutput = (result) => {
    if (!result) return
    const [key] = Object.keys(result)
    console.log(typeof result[key])
    switch (typeof result[key]) {
        case "string": return result[key];
        case "number": return result[key].toLocaleString();
    }

}
    return (
        <div className="output-container">
                        <output>{renderOutput(result)}</output>

        </div>
    )
}

export default Output;
