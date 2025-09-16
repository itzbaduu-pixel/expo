import { render } from "@testing-library/react-native";

import HomeScreen from "../App.js";

describe("<HomeScreen />", () => {
  test("Text renders correctly on HomeScreen", () => {
    const { getByText } = render(<HomeScreen />);

    getByText("Open up App.js to start working on your app!");
  });
});
