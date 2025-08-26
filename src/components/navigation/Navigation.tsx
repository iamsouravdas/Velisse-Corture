import React from "react"
import type { navaigationComponentProps } from "./navigation.type"
import type { navigationInterface } from "../../data/app/navigation"

const Navigation: React.FC<navaigationComponentProps> = ({ data, customClass }) => {
    return (
        <div className={`${customClass}`}>
            {data.map((element: navigationInterface, index: number) => {
                return <div key={index}>{element.optionName}</div>
            })}
        </div>
    );
}
export default Navigation