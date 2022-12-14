import { PrState } from "./models/interface";

export function getData(value: number, baseUrl: string): Promise<PrState[]>{
  return fetch(`${baseUrl}${value}/photos`)
    .then((data: Response) => data.json())
    .then((data: PrState[]) => data.splice(0, 10) as PrState[])
}
