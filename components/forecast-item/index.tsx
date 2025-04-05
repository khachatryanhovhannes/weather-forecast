interface ForecastItemProps {
  time: string;
  temp: number;
  icon: string;
}

export default function ForecastItem({ time, temp, icon }: ForecastItemProps) {
  return (
    <div className="flex flex-col items-center bg-white/10 rounded p-2 text-gray-500 text-sm">
      <div>{time}</div>
      <img src={icon} alt="weather" className="w-8 h-8" />
      <div>{temp}°C</div>
    </div>
  );
}
