import { useState } from "react";
import { HeaderTrue, HeaderFalse } from "./Header";

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

export default function Button() {
    const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
    const [isToggled, setIsToggled] = useState(false);

    const onButtonClick = (color) => () => {
        setBackgroundColor(color);
        setIsToggled(!isToggled);
    };
    return (
        <div>
            <header>{isToggled === true ? <HeaderTrue /> : <HeaderFalse />}</header>
        <div className="App" style={{backgroundColor}}>
            {COLORS.map((color) => (
                <button
                    type="button"
                    key={color}
                    onClick={onButtonClick(color)}
                    className={backgroundColor === color ? "selected" : ""}
                >
                    {color}
                </button>
            ))}
        </div>
        </div>
    )
}
