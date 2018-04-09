import { Test } from '@nestjs/testing';
import { TestingModule } from '@nestjs/testing/testing-module';
import { TcController } from './tc.controller';
import { expect } from 'chai';

describe('TcController', () => {
  let module: TestingModule;
  beforeEach(() => {
    return Test.createTestingModule({
      controllers: [
        TcController
      ]
    }).compile()
      .then(compiledModule => module = compiledModule);
  });

  let controller: TcController;
  beforeEach(() => {
    controller = module.get(TcController);
  });

  it('should exist', () => {
    expect(controller).to.exist;
  });
});
