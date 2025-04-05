import ForecastItem from "../forecast-item";

interface HourlyForecastProps {
  data: {
    forecastday: {
      date: string;
      hour: {
        time: string;
        temp_c: number;
        condition: {
          icon: string;
          text: string;
        };
      }[];
    }[];
  };
}

export default function HourlyForecast({ data }: HourlyForecastProps) {
  return (
    <div className="space-y-6 mt-8">
      <h2 className="text-xl font-bold text-gray-700 mb-2">Hourly Forecast</h2>

      {data.forecastday.map((day, i) => (
        <div key={i} className="text-gray-800">
          <h3 className="text-md font-semibold mb-2">{day.date}</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 ">
            {day.hour.map((hour, j) => (
              <ForecastItem
                key={j}
                time={hour.time.split(" ")[1]}
                temp={hour.temp_c}
                icon={hour.condition.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
