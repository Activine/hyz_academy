import { PrState } from "./models/interface"

export function getData(value: number): Promise<PrState[]>{
  return fetch(`https://jsonplaceholder.typicode.com/albums/${value}/photos`)
    .then((data: Response) => data.json())
    .then((data: PrState[]) => data.splice(0, 10) as PrState[])
}
