import { Module } from '@nestjs/common';
import { AppController } from './app.contoller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entity/user.entity';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [AppController, AuthController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: '<username>',
      password: '<password>',
      database: 'nestjs',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
