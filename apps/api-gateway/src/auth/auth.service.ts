import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  success: boolean;
  message: string;
  token: string;
}

interface AuthGrpcService {
  login(data: LoginRequest): Observable<LoginResponse>;
}

@Injectable()
export class AuthService implements OnModuleInit {
  private authGrpcService: AuthGrpcService;

  constructor(
    @Inject('AUTH_SERVICE')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.authGrpcService =
      this.client.getService<AuthGrpcService>('AuthService');
  }

  login(email: string, password: string) {
    return this.authGrpcService.login({
      email,
      password,
    });
  }
}
