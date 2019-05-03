import { CreateCatDto } from './dto/cat.dto';
import { Model } from 'mongoose';
// import { Cat } from './interfaces/cat.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<any>) {}

  async create(createCatDto: CreateCatDto):Promise<any> {
    const createdCat = new this.catModel(createCatDto)
    // console.log( createCatDto, ';')
    console.log('asjkd')
    return await createdCat.save()
  }

  async findAll(): Promise<any[]> {
    return await this.catModel.find().exec()
  }

}
