import parser from './parser';
import reader from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    const responseRead = await reader();
    const responseParse = await parser(responseRead);
    const result = await new GameSaving(JSON.parse(responseParse));
    return result;
  }
}
