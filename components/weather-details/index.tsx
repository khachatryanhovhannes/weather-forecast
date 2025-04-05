interface IWeatherDetailsProps {
  data: {
    condition: string;
    tempMax: number;
    tempMin: number;
    humidity: number;
    wind: number;
    cloud: number;
  };
}

export default function WeatherDetails({ data }: IWeatherDetailsProps) {
  return (
    <div className="text-white mb-6">
      <h2 className="text-xl font-bold mb-2">Weather Details</h2>
      <p className="text-sm text-gray-300 mb-4">{data.condition}</p>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>🌡️ Temp max:</span> <span>{data.tempMax}°</span>
        </div>
        <div className="flex justify-between">
          <span>❄️ Temp min:</span> <span>{data.tempMin}°</span>
        </div>
        <div className="flex justify-between">
          <span>💧 Humidity:</span> <span>{data.humidity}%</span>
        </div>
        <div className="flex justify-between">
          <span>☁️ Cloudy:</span> <span>{data.cloud}%</span>
        </div>
        <div className="flex justify-between">
          <span>💨 Wind:</span> <span>{data.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
