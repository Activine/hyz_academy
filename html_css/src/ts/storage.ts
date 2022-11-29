import { Data } from "./models/interface";
import { Storage } from "./models/interface";
import { localSt } from "./decorators/localStorage.decorator";
import { sessionSt } from "./decorators/sessionStorage.decorator";

export class UserStorage implements Storage{
  private static instance: UserStorage;

  public static getInstance(): UserStorage {
    return !UserStorage.instance ? UserStorage.instance = new UserStorage() : UserStorage.instance
  }
  
  @localSt("dataSlider")
  @sessionSt("dataSlider")
  private localData: Array<Data>;

  public setData(data: any): void {
    this.localData = data
  }

  public getData(key: string): Array<Data> | null {
    return this.localData
  }
}
