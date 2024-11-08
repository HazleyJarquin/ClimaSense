// ForecastSwiper.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { IForecastResponse } from "../../../interfaces";
import { useCityStore, useDarkMode } from "../../../store";
import { useGetForecast } from "../../../hooks";
import { ForecastSwiper } from "..";

// Mock de los hooks
jest.mock("../../../hooks", () => ({
  useGetForecast: jest.fn(),
}));

jest.mock("../../../store", () => ({
  useCityStore: jest.fn(),
  useDarkMode: jest.fn(),
}));

// Datos de prueba
const mockForecastData: IForecastResponse = {
  cod: "200",
  message: 0,
  cnt: 2,
  list: [
    {
      dt: 1672531200,
      main: {
        temp: 10,
        feels_like: 8,
        temp_min: 5,
        temp_max: 15,
        pressure: 1013,
        humidity: 85,
        grnd_level: 950,
        sea_level: 1013,
      },
      weather: [
        {
          main: "Clear",
          description: "clear sky",
          icon: "01d",
          id: 800,
        },
      ],
    },
    {
      dt: 1672534800,
      main: {
        temp: 12,
        feels_like: 10,
        temp_min: 7,
        temp_max: 17,
        pressure: 1015,
        humidity: 80,
        grnd_level: 950,
        sea_level: 1013,
      },
      weather: [
        {
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
          id: 801,
        },
      ],
    },
  ],
};

// Comienzo de la descripción de pruebas
describe("ForecastSwiper", () => {
  beforeEach(() => {
    // Configurar mocks para city y dark mode
    (useCityStore as unknown as jest.Mock).mockReturnValue({ city: "Madrid" });
    (useDarkMode as unknown as jest.Mock).mockReturnValue({
      isDarkTheme: false,
    });
  });

  it("should render loading skeleton while fetching data", () => {
    // Mockear el estado de carga
    (useGetForecast as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
    });

    render(<ForecastSwiper />);
    expect(screen.getByTestId("loading-skeleton")).toBeInTheDocument();
  });

  it("should render Swiper with forecast data", () => {
    // Mockear datos de la previsión
    (useGetForecast as jest.Mock).mockReturnValue({
      data: mockForecastData,
      isLoading: false,
    });

    render(<ForecastSwiper />);

    // Verificar que se renderizan los slides de Swiper
    const slides = screen.getAllByTestId("forecast-slide");
    expect(slides.length).toBe(mockForecastData.list.length);

    // Verificar que el primer slide muestra la fecha y el clima
    const firstSlideDate = new Date(
      mockForecastData.list[0].dt * 1000
    ).toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    expect(screen.getByText(firstSlideDate)).toBeInTheDocument();
    expect(screen.getByText("clear sky")).toBeInTheDocument();
  });
});
