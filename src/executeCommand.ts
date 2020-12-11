import { exec } from 'child_process';
import util from 'util';

const sh = util.promisify(exec);

export async function executeCommand(command: string) {
  try {
    await sh(command);
    return true;
  } catch (e) {
    return false;
  }
}

