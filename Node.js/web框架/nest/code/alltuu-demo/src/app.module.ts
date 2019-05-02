import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
