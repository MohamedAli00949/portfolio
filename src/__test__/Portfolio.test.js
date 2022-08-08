import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Portfolio from "../components/Portfolio/Portfolio";

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
        await render(<Suspense><Portfolio /></Suspense>)
    });

    container = await document.body;

    expect(container.querySelector("section").getAttribute("id")).toBe("Portfolio");
    expect(container.querySelector("p").textContent).toBe("Selected works");
    expect(container.querySelector("h2").textContent).toBe("Portfolio");
    
    expect(container.querySelectorAll("ul li").length).toBe(6);
    
    expect(container.querySelectorAll("ul li p")[0].textContent).toBe("Phonebook");
    expect(container.querySelectorAll("ul li p")[1].textContent).toBe("Would You Rather...?");
    expect(container.querySelectorAll("ul li p")[2].textContent).toBe("sample twitter");
    expect(container.querySelectorAll("ul li p")[3].textContent).toBe("My reads");
    expect(container.querySelectorAll("ul li p")[4].textContent).toBe("autowats");
    expect(container.querySelectorAll("ul li p")[5].textContent).toBe("landing page");

    expect(container.querySelectorAll("ul li.project a")[0].textContent).toBe("Code in github");
    expect(container.querySelectorAll("ul li.project a")[1].textContent).toBe("Show the demo");

    expect(container.querySelector("ul li.project .overflow")).toBeTruthy();
    expect(container.querySelector("ul li.project .main-cover")).toBeTruthy();

    expect(container).toMatchSnapshot();
})