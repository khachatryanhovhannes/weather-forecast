interface WeatherMainProps {
  data: {
    city: string;
    country: string;
    temp: number;
    icon: string;
    time: string;
  };
}

export default function WeatherMain({ data }: WeatherMainProps) {
  const time = new Date(data.time);
  const formattedDate = time.toLocaleDateString("en-GB", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });

  const formattedTime = time.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="text-center mb-6 space-y-4">
      {/* Weather Icon */}
      <div>
        <img
          src={data.icon.replace("//", "https://")}
          alt="weather-icon"
          className="mx-auto w-24 h-24 drop-shadow"
        />
      </div>

      {/* Temperature */}
      <h1 className="text-6xl font-bold">{data.temp}°C</h1>

      {/* Location */}
      <p className="text-xl font-medium">
        {data.city}, <span className="text-gray-300">{data.country}</span>
      </p>

      {/* Time & Date */}
      <p className="text-sm text-gray-400">
        {formattedTime} · {formattedDate}
      </p>
    </div>
  );
}
