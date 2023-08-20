import { Module } from '@nestjs/common';
import { AppController } from './app.contoller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AppController],
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password123',
      database: 'nestjs',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
