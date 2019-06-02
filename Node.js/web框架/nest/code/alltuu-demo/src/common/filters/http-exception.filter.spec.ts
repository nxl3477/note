
// 创建过滤器
import { HttpExceptionFilter } from './http-exception.filter';

describe('HttpExceptionFilter', () => {
  it('should be defined', () => {
    expect(new HttpExceptionFilter()).toBeDefined();
  });
});
