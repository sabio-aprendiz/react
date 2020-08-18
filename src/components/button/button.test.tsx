import React from "react";
import { fireEvent, render } from "@testing-library/react";

import Button, { Props } from ".";

describe("Button", () => {
  let props: Props;

  beforeEach(() => {
    props = {
      children: <div>I am a button</div>,
      onClick: jest.fn(),
      disabled: false,
      type: "submit",
      color: "",
      dataTestId: "button",
    };
  });

  describe("actions", () => {
    it("triggers the callback when clicked", () => {
      const { getByTestId } = render(<Button {...props} />);
      const button = getByTestId("button");

      fireEvent.click(button);

      expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it("does not trigger the callback when clicked if the button is disabled", () => {
      props.disabled = true;
      const { getByTestId } = render(<Button {...props} />);
      const button = getByTestId("button");

      fireEvent.click(button);

      expect(props.onClick).toHaveBeenCalledTimes(0);
    });
  });

  describe("render()", () => {
    it("renders a submit button", () => {
      const { container } = render(<Button {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="px-4 py-2 rounded font-semibold bg-gray-200 text-black"
          data-testid="button"
          type="submit"
        >
          <span>
            <div>
              I am a button
            </div>
          </span>
        </button>
      `);
    });

    it("renders a reset button", () => {
      props.type = "reset";

      const { container } = render(<Button {...props} />);
      expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="px-4 py-2 rounded font-semibold bg-gray-200 text-black"
          data-testid="button"
          type="reset"
        >
          <span>
            <div>
              I am a button
            </div>
          </span>
        </button>
      `);
    });
  });
});
