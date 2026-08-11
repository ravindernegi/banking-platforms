import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    AuthModule,
    ClientsModule.register([
      {
        name: 'AUTH_SERVICE',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          protoPath: join(__dirname, '../../proto/auth.proto'),
          url: 'localhost:50051',
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
