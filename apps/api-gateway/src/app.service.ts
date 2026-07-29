import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck(): object {
    return { status: 200, message: 'ok' };
  }
}
