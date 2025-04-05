import WeatherMain from "@/components/weather-main";
import WeatherDetails from "@/components/weather-details";
import HourlyForecast from "@/components/hourly-forecast";
import SearchBar from "@/components/search-bar";
import { getCurrentWeather } from "@/services";
import DaysSelector from "@/components/days-selector";
export default async function Home({
  searchParams,
}: {
  searchParams?: { q?: string; days?: string };
}) {
  const city = (searchParams?.q as string) || "Yerevan";
  const days = Number(searchParams?.days || 1);

  const weather = await getCurrentWeather(city, days);

  return (
    <main className="flex flex-col-reverse  lg:flex-row min-h-screen">
      <div className="lg:w-2/3 p-6 overflow-y-auto min-h-screen h-full bg-gradient-to-b from-blue-200 to-blue-400">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Forecast for the Next {days} Day{days > 1 ? "s" : ""}
        </h2>
        <HourlyForecast data={weather.forecast} />
      </div>

      <div className="lg:w-1/3 w-full bg-black/40 p-6 text-gray-800 lg:fixed static lg:right-0 lg:h-screen">
        <div className="">
          <SearchBar defaultValue={city} />
          <DaysSelector />

          <div className="flex-col flex lg:flex-col md:flex-row justify-center lg:gap-0 items-center">
            <WeatherMain
              data={{
                city: weather.location.name,
                country: weather.location.country,
                temp: weather.current.temp_c,
                icon: weather.current.condition.icon,
                time: weather.location.localtime,
              }}
            />
            <WeatherDetails
              data={{
                condition: weather.current.condition.text,
                tempMax: weather.forecast.forecastday[0].day.maxtemp_c,
                tempMin: weather.forecast.forecastday[0].day.mintemp_c,
                humidity: weather.current.humidity,
                wind: weather.current.wind_kph,
                cloud: weather.current.cloud,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
