import React from "react";
import { render, fireEvent } from "react-testing-library";
import Trigger from "../src";

describe("Trigger", () => {
    test("render", () => {
        const container = document.createElement("div");
        document.body.append(container);
        const wrapper = render(
            <Trigger getContainer={() => container} action={["click"]}>
                <button>按钮</button>
            </Trigger>,
            { container }
        );

        const trigger = container.querySelector(".xy-trigger");
        expect(trigger.classList.contains("xy-trigger-open")).toBeFalsy();
        fireEvent.click(wrapper.getByText("按钮"));
        expect(trigger.classList.contains("xy-trigger-open")).toBeTruthy();
        fireEvent.click(wrapper.getByText("按钮"));
        expect(trigger.classList.contains("xy-trigger-open")).toBeFalsy();
    });
});
