import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { TcService } from './tc.service';
import { expect } from 'chai';

describe('TcService', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      components: [
        TcService
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let service: TcService;
  beforeEach(() => {
    service = module.get(TcService);
  });

  it('should exist', () => {
    expect(service).to.exist;
  });
});
