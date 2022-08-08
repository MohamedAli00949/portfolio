import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Home from "../components/Home/Home";

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
        await render(<Suspense><Home /></Suspense>)
    });
    
    container = await document.body;

    expect(container.querySelector("section").getAttribute("id")).toBe("Home");
    expect(container.querySelector(".navbar").classList.contains("navbar")).toBeTruthy();
    
    expect(container.querySelector(".home-container p").textContent).toBe("Hey");
    expect(container.querySelector(".home-container h1").textContent).toBe("I am Mohamed Ali Fawzi");
    expect(container.querySelector(".home-container p.details").textContent).toBe("I am Software Engineer from Egypt.I am Computer Science Student.");
    expect(container.querySelector(".home-container div a").getAttribute("href")).toBe("#About");

    expect(container).toMatchSnapshot();
})