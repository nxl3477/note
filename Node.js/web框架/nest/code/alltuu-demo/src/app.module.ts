import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { ConfigModule } from './config/config.module';

@Module({
  // imports: [MongooseModule.forRoot('mongodb://localhost/nxl'), UsersModule, HomeModule],
  imports: [UsersModule, HomeModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
