import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import About from "../components/About/About";

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

it("Render About unit testing", async () => {
    await act(async () => {
        await render(<React.Suspense fallback="loading"><About /></React.Suspense>);
    })
    // await screen.query
    container = await document.body;

    expect(container.querySelector("section").getAttribute("id")).toBe("About");

    expect(container.querySelector("section").style.background).toBe("rgb(37, 63, 80)")
    expect(container.querySelector("section").style.color).toBe("white")
    expect(container.querySelector("section").style.padding).toBe("132px 0px");

    expect(container.querySelector("a").textContent).toBe("Download Resume");

    expect(container.querySelectorAll("h2")[0].textContent).toBe("Contact details");
    expect(container.querySelectorAll("h2")[1].textContent).toBe("About Me");
    expect(container).toMatchSnapshot();
})