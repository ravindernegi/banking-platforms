import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @HttpCode(HttpStatus.OK)
  healthCheck(): object {
    return { status: 200, message: 'ok' };
  }
}
