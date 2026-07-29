import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('login')
  login() {
    return { message: 'Data get' }; // tokens never touch the JSON body
  }
}
