import type { Temperature as TemperatureType } from "apps/weather/loaders/temperature.ts";
import Button from "deco-sites/will-deco-task/components/ui/Button.tsx";

export interface Props {
  /**
   * @title Temperatura
   * @description Adicione a temperatura
   */
  temperature: TemperatureType | null;
  city?: "São Paulo - SP" | "Salvador - BA" | "Curitiba - PA";
}

export default function Temperature({ temperature, city }: Props) {
  const numberCelsius = temperature?.celsius;

  return (
    <div class="mx-auto my-0 sm:my-8 p-6 min-h-[630px] flex flex-col sm:flex-row sm:justify-between relative bg-slate-300">      
      <h1 class="text-lg sm:text-7xl text-left font-bold text-black my-8">
        {city ?? "São Pauo - SP"}
      </h1>
      <Button class="bg-black hover:bg-black outline-0 rounded-full w-28 h-28 fixed sm:sticky right-0 top-36 z-30">
        {numberCelsius && (
          <span class="text-white text-xs sm:text-sm font-bold flex flex-col gap-1">
            Temperatura{" "}
            <span class="text-lg underline">{numberCelsius + "°"}</span>
          </span>
        )}
      </Button>
    </div>
  );
}
