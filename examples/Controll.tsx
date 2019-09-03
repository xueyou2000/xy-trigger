import React, { useState } from "react";
import Trigger from "../src";
import "./index.scss";
import { TriggerAction } from "utils-hooks";

const ACTION: TriggerAction[] = ["click"];
const POPUPALIGN = { overflow: { adjust: false, flip: true } };

const List = React.memo(() => {
    return (
        <ul className="demo-list">
            <li>列表1</li>
            <li>列表2</li>
            <li>列表3</li>
            <li>列表4</li>
            <li>列表5</li>
            <li>列表6</li>
            <li>列表7</li>
            <li>列表8</li>
            <li>列表9</li>
            <li>列表10</li>
            <li>列表11</li>
            <li>列表12</li>
            <li>列表13</li>
        </ul>
    );
});

export default function() {
    const [visible, setVisible] = useState(false);

    function changeHandle(v: boolean, event: MouseEvent) {
        setVisible(v);
    }

    return (
        <div>
            <button onClick={() => setVisible((prev) => !prev)}>外部主动切换</button>
            <br />
            <Trigger visible={visible} onChange={changeHandle} popup={<List />} popupAlign={POPUPALIGN} action={ACTION}>
                <button>按钮</button>
            </Trigger>
        </div>
    );
}
