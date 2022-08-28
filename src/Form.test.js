import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Form from "./Form";

const mock = jest.fn((name ) =>{
    return Promise.resolve(name);
});

describe("Form", ()=>{
    beforeEach(() =>{
        render(<Form form ={ mock}/>);
    });


    it("should display the required error when value is invalid", async() =>{
        fireEvent.submit(screen.getByRole("button",{name: /submit/i}));

        expect(mock).not.toBeCalled();
    });

    it("it should not display an error when value is present" , async() => {
        fireEvent.input(screen.getByRole("textbox"),{
            target: {
                value: "Kate"
            }
        });

        fireEvent.submit(screen.getByRole("button", {name: /submit/i}));
        expect(screen.getByRole("textbox").value).toBe( "Kate");

    });
});