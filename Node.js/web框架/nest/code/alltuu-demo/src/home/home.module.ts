import { ViewInterceptor } from './../common/interceptors/view.interceptor';
import { Module } from '@nestjs/common';
import { HomeController } from './home.controller';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  controllers: [HomeController],
  // 同理 异常过滤器、管道 等等 也可以只作用在特定模块上，使用不同的常量就可以了。
  providers: [
    {
      // 标识提供者是一个拦截器， 如果是管道则用 APP_PIPE。
      provide: APP_INTERCEPTOR,
      // 使用指定 类
      useClass: ViewInterceptor
    }
  ]
})
export class HomeModule {}
