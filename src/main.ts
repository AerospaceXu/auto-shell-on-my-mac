import shells from './shells';
import { executeCommand } from './executeCommand';

const main = async () => {
  for (const commands of shells) {
    for (const [prompt, command] of commands.entries()) {
      console.log(`开始${prompt} ...`);
      const res = await executeCommand(command);
      if (!res) {
        console.log(`❌ ${prompt} 处理失败`);
      } else {
        console.log(`✅ ${prompt} 成功`);
      }
    }
  }
};

main();
