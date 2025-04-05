import instance from "@/lib/axios/instance";

export async function getCurrentWeather(city: string, days: number = 1) {
  const res = await instance.get("/forecast.json", {
    params: {
      q: city,
      days,
      aqi: "yes",
    },
  });
  return res.data;
}

export const getForecast = async (location: string, days = 3) => {
  const response = await instance.get("/forecast.json", {
    params: {
      q: location,
      days,
      aqi: "yes",
    },
  });
  return response.data;
};

export const getAstronomy = async (location: string, date: string) => {
  const response = await instance.get("/astronomy.json", {
    params: {
      q: location,
      dt: date,
    },
  });
  return response.data;
};
