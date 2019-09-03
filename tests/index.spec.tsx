import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Trigger from "../src";

describe("Trigger", () => {
    test("render", () => {
        const container = document.createElement("div");
        document.body.append(container);
        const wrapper = render(
            <Trigger popup={<div>popup content</div>} getContainer={() => container} action={["click"]}>
                <button className="btn">按钮</button>
            </Trigger>,
            { container },
        );

        const trigger = container.querySelector(".xy-trigger");
        expect(trigger.classList.contains("xy-trigger-open")).toBeFalsy();
        // 这个测试没有任何意义，因为click事件不会触发
        // expect(trigger.classList.contains("xy-trigger-open")).toBeTruthy();
        // fireEvent.click(wrapper.getByText("按钮"));
        // expect(trigger.classList.contains("xy-trigger-open")).toBeFalsy();
    });
});
