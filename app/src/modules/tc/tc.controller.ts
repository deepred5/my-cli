import { Controller } from '@nestjs/common';
import { TcService } from './tc.service';

@Controller()
export class TcController {
  constructor(private readonly tcService: TcService) {}
}
