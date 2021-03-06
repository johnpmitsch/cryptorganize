import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import CryptoList from "../src/components/CryptoList";

it("renders without crashing", () => {
  const rendered = renderer.create(<CryptoList />).toJSON();
  expect(rendered).toBeTruthy();
});
