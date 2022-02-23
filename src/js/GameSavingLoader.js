import parser from './parser';
import reader from './reader';

export default class GameSavingLoader {
  static async load() {
    const responseRead = await reader();
    return parser(responseRead);
  }
}
