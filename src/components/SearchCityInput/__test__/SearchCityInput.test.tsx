import { render, screen, fireEvent } from "@testing-library/react";
import { useCityStore } from "../../../store";
import { SearchCityInput } from "..";

jest.mock("../../../store", () => ({
  useCityStore: jest.fn(),
  useDarkMode: () => ({
    isDarkTheme: false,
    setIsDarkTheme: jest.fn(),
  }),
}));

jest.mock("../../ModeToggle", () => ({
  ModeToggle: () => <div>ModeToggle Mock</div>,
}));

describe("SearchCityInput", () => {
  let setCityMock: jest.Mock;

  beforeEach(() => {
    setCityMock = jest.fn();

    (useCityStore as unknown as jest.Mock).mockReturnValue({
      setCity: setCityMock,
    });
  });

  it("it should render correctly", () => {
    render(<SearchCityInput />);
    expect(
      screen.getByPlaceholderText("Ingresa el nombre de la ciudad")
    ).toBeInTheDocument();
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });

  it("it should update status when typing in text field", () => {
    render(<SearchCityInput />);
    const input = screen.getByPlaceholderText("Ingresa el nombre de la ciudad");

    fireEvent.change(input, { target: { value: "Madrid" } });
    expect(input).toHaveValue("Madrid");
  });

  it("it should call setCity and clear the text field when the button is clicked", () => {
    render(<SearchCityInput />);
    const input = screen.getByPlaceholderText("Ingresa el nombre de la ciudad");
    const button = screen.getByTestId("search-button");

    fireEvent.change(input, { target: { value: "Madrid" } });
    fireEvent.click(button);

    expect(setCityMock).toHaveBeenCalledWith("Madrid");
    expect(input).toHaveValue("");
  });

  it("it should call setCity when pressing Enter", () => {
    render(<SearchCityInput />);
    const input = screen.getByPlaceholderText("Ingresa el nombre de la ciudad");

    fireEvent.change(input, { target: { value: "Madrid" } });
    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

    expect(setCityMock).toHaveBeenCalledWith("Madrid");
    expect(input).toHaveValue("");
  });

  it("it should not call setCity if the field is empty and the button is clicked", () => {
    render(<SearchCityInput />);
    const button = screen.getByTestId("search-button");

    fireEvent.click(button);
    expect(setCityMock).not.toHaveBeenCalled();
  });
});
