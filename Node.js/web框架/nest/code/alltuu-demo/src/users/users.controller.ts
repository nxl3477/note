import { UsersGuard } from './guards/users.guard';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserIdPipe } from './pipes/user-id.pipe';
import { ApiErrorCode } from './../common/enums/api-error-code.enum';
import { ApiException } from './../common/exceptions/api.exception';

import { Controller, Param, Get, Post, Delete, Put, HttpException, HttpStatus, Body, UseGuards } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService ) {

    }

    @Get()
    async findAll(): Promise<User[]> {

        return await this.usersService.findAll();
    }

    // @Get(':id')
    // // 管道与验证其器
    // async findOne(@Param('id', new UserIdPipe()) id): Promise<User> {
    //     // const { id } = params 
    //     // if( !/^[0-9]+.?[0-9]$/.test( id ) ) {
    //     //     throw new ApiException('用户Id错误', ApiErrorCode.USER_ID_INVALID ,HttpStatus.BAD_REQUEST)
    //     // }
    //     return await this.usersService.findOne(id);
    // }

    @Post()
    async create(@Body() user: CreateUserDto  ): Promise<User> {
        return await this.usersService.create(user);
    }

    @Put()
    async edit() {
        // return await this.usersService.edit();
    }

    @Delete()
    async remove() {
        // return await this.usersService.remove();
    }

    @Get('info')
    @UseGuards(UsersGuard)
    async info() {
        return 'info'
    }
}
