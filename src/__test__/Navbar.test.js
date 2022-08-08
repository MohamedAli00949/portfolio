import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Navbar from "../components/Navbar/Navbar";

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
        await render(<Suspense><Navbar /></Suspense>)
    })

    container = await document.body;

    expect(container.querySelector("h1 a").textContent).toBe("MAF");

    expect(container.querySelectorAll("ul.nav-section li")[0].querySelector("a").textContent).toBe("Home");
    expect(container.querySelectorAll("ul.nav-section li")[1].querySelector("a").textContent).toBe("About");
    expect(container.querySelectorAll("ul.nav-section li")[2].querySelector("a").textContent).toBe("Portfolio");
    expect(container.querySelectorAll("ul.nav-section li")[3].querySelector("a").textContent).toBe("Skills");
    expect(container.querySelectorAll("ul.nav-section li")[4].querySelector("a").textContent).toBe("Contact");

    expect(container).toMatchSnapshot();
})