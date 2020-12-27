import { exec } from 'child_process';
import util from 'util';

const shell = util.promisify(exec);

export async function executeCommand(command: string) {
  let status: number = 0;
  try {
    const { stdout } = await shell(command);
    if (stdout) {
      console.log(stdout);
    }
    status = 1;
  } catch (e) {
    status = 2;
  }
  return status;
}
