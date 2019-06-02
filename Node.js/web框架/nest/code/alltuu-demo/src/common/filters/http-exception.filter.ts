import { ApiException } from './../exceptions/api.exception';
// 自定义的过滤器
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()
    const status = exception.getStatus()

    // 在全局过滤器区别处理自定义的异常
    if( exception instanceof ApiException ) {
      response.status(status).json({
        statusCode: exception.getErrorCode(),
        errorMessage: exception.getErrorMessage(),
        date: new Date().toLocaleDateString(),
        path: request.url
      })
    } else {
      response.status(status).json({
        statusCode: status,
        date: new Date().toLocaleDateString(),
        path: request.url
      })
    }


    
  }
}
