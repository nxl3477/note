import { ViewInterceptor } from './../common/interceptors/view.interceptor';
import { View } from './../common/libs/View';
import { Controller, Get, Res, UseInterceptors } from '@nestjs/common';

@Controller('home')
export class HomeController {

  @Get()
  // @UseInterceptors(ViewInterceptor)
  index(): View {
    // 此处返回的结果将被拦截器next处接受 ( 也就是next.handle()执行之后 )
    return new View('home/home.html')
  }
}
