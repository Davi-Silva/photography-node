import chalk from 'chalk';

import app from './app';
import { APP_NAME, PORT } from './constrants/envs';

app.listen(PORT, () => {
  console.log(`${APP_NAME} is listening on port: ${chalk.green(PORT)}`);
});
