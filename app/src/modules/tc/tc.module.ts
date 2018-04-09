import { TcService } from './tc.service';
import { TcController } from './tc.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [
    TcController
  ],
  components: [
    TcService
  ]
})
export class TcModule {}
