import React from "react";
import { render } from "@testing-library/react";
import Favorites from "./Favorites";

describe("Favorites tests", () => {
  it("should render", () => {
    expect(render(<Favorites />)).toBeTruthy();
  });
});
