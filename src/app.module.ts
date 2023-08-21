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
      username: '<username>',
      password: '<password>',
      database: 'nestjs',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
