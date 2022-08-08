import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Footer from "../components/Footer/Footer";

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
        await render(<Suspense><Footer /></Suspense>)
    })

    container = await document.body;

    expect(container.querySelector("footer"));
    expect(container.querySelector("h1 .logo").textContent).toBe("MAF");
    expect(container.querySelector("p").textContent).toBe("Connect");
    // console.log(container.querySelectorAll(".social-media a").length)
    expect(container.querySelectorAll(".social-media a")[0].classList.contains("facebook")).toBeTruthy();
    expect(container.querySelectorAll(".social-media a")[1].classList.contains("linkedin")).toBeTruthy();
    expect(container.querySelectorAll(".social-media a")[2].classList.contains("github")).toBeTruthy();

    expect(container).toMatchSnapshot();
})