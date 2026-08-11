import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class AppController {
  @Get('health')
  health() {
    return {
      status: 'ok',
      service: 'auth',
    };
  }

  @GrpcMethod('AuthService', 'Login')
  login(data: { email: string; password: string }) {
    console.log(data);

    return {
      success: true,
      message: 'Login successful',
      token: 'example-token',
    };
  }
}
