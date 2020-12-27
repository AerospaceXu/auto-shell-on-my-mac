import shells from './shells';
import { executeCommand } from './executeCommand';

const main = async () => {
  // forEach 无法进行异步操作的 await
  for (const commands of shells) {
    for (const [prompt, command] of commands.entries()) {
      console.log(`⌛️⌛️⌛️ 开始 ${prompt} ...`);
      const status = await executeCommand(command);
      switch (status) {
        case 1:
          console.log(`✅ ${prompt} 成功`);
          break;
        case 2:
          console.log(`❌ “${prompt}”命令执行失败`);
          break;
        default:
          break;
      }
      console.log('\n');
    }
  }
};

main();
