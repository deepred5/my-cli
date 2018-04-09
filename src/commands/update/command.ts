import { LoggerService } from '../../logger/logger.service';
import { UpdateHandler} from './handler';

export class UpdateCommand {
  constructor() {}

  public async init(program) {
    program
      .command('update', 'Update the nmcc project')
      .action(async (args, options, logger) => {
        LoggerService.setLogger(logger);
        await new UpdateHandler().handle();
      });
  }
}
