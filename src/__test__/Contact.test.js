import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Contact from "../components/Contact/Contact";

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

it("render a contact section test", async () => {
    await act(async () => {
        await render(<Suspense><Contact /></Suspense>);
    });

    container = await document.body;

    expect(container.querySelector("section").getAttribute("id")).toBe("Contact");

    expect(container.querySelector("section").style.background).toBe("rgb(222, 248, 255)");
    expect(container.querySelector("section").style.padding).toBe("132px 0px");

    expect(container.querySelector("h2").textContent).toBe("Contact");

    expect(container.querySelectorAll("input")[0].getAttribute("id")).toBe("Name");
    expect(container.querySelectorAll("input")[1].getAttribute("id")).toBe("Email");
    expect(container.querySelectorAll("input")[2].getAttribute("id")).toBe("Phone");
    expect(container.querySelector("textarea").getAttribute("id")).toBe("Message");

    expect(container.querySelector("button").textContent).toBe("Submit the message");

    expect(container).toMatchSnapshot();
})