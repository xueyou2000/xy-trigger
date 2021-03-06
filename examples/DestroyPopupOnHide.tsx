import React from "react";
import Trigger from "../src";
import "./index.scss";

export default function() {
    const list = (
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

    return (
        <div>
            <Trigger destroyPopupOnHide={true} popup={list} popupAlign={{ overflow: { adjust: false, flip: true } }} action={["click"]}>
                <button>按钮</button>
            </Trigger>
        </div>
    );
}
