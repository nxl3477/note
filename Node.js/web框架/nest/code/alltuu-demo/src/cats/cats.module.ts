import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsService } from './cats.service';
import { CatSchema } from './schemas/cat.schema';
import { CatsController } from './cats.controller';

@Module({
  // 载入cat 模型
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
