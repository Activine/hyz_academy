import { Data } from "./models/interface";
import { Storage } from "./models/interface";

export class UserStorage implements Storage{
  private static instance: UserStorage;

  public static getInstance(): UserStorage {
    return !UserStorage.instance ? UserStorage.instance = new UserStorage() : UserStorage.instance
  }

  public setData(key: string, data: any): void {
    return localStorage.setItem(key, JSON.stringify(data))
  }

  public getData(key: string): Array<Data> | null {
    return localStorage.getItem(key) 
    ? JSON.parse(localStorage.getItem(key))
    : null
  }
}
