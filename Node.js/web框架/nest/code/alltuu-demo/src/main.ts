import { ApiParamsValidationPipe } from './common/pipe/api-params-validation.pipe';
declare const module: any;
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path'
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { static as resource } from 'express';
import * as art from 'express-art-template';

async function bootstrap() {
  // 想使用express 模板引擎必须填写泛型
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 模板引擎配置
  // 处理静态文件
  app.use('/static', resource('resource'))

  
  // 指定模板引擎
  
  app.engine('html', art)

  // 设置模板引擎的配置项
  app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    minimize: true,
    rules: [ 
      { test: /<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/ },
      { test: /{%([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*%}/ }
    ]
  });

  // 设置视图文件的所在目录
  app.setBaseViewsDir('resource/views');

  
  
  
  
  
  // 过滤器/ 自定义错误结果格式
  app.useGlobalFilters(new HttpExceptionFilter())
  app.useGlobalPipes(new ApiParamsValidationPipe())

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
