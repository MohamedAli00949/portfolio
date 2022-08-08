import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Skills from "../components/Skills/Skills";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    container.setAttribute("id", "containeer")
    document.body.appendChild(container);
});

afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("render footer section", async () => {
    await act(async () => {
        await render(<Suspense><Skills /></Suspense>)
    })

    container = await document.body;

    expect(container.querySelector("section").getAttribute("id")).toBe("Skills");
    expect(container.querySelector("h2").textContent).toBe("Skills");

    expect(container.querySelectorAll("ul li").length).toBe(12);
    
    expect(container.querySelector("ul li .circle"));
    expect(container.querySelector("ul li .circle .dot"));
    expect(container.querySelectorAll("ul li .circle svg circle").length).toBe(2*12);

    expect(container.querySelector("ul li .skill-details p").textContent).toBe("HTML");
    expect(container.querySelectorAll("ul li .skill-details p")[1].textContent).toBe("95%");

    expect(container).toMatchSnapshot();
})