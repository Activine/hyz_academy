import { UserStorage } from "../storage";
import { Storage } from "./interface";

export abstract class AppAbstract {
  protected storage: Storage = UserStorage.getInstance();
  protected baseUrl: string = `https://jsonplaceholder.typicode.com/albums/`;
}