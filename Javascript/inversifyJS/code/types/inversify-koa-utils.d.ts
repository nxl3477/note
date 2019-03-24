export class InversifyKoaServer {
  constructor(container: any, customRouter: any, routingConfig: any, customApp: any);
  build(): any;
  checkQueryParam(paramType: any, param: any, name: any): any;
  extractParameters(ctx: any, next: any, params: any): any;
  getParam(source: any, paramType: any, name: any): any;
  handlerFactory(controllerName: any, key: any, parameterMetadata: any): any;
  registerControllers(): void;
  resolveMidleware(...args: any[]): any;
  setConfig(fn: any): any;
  setErrorConfig(fn: any): any;
}
export const TYPE: {
  Controller: symbol;
};
export function all(path: any, ...args: any[]): any;
export function controller(path: any, ...args: any[]): any;
export function cookies(name: any): any;
export function httpDelete(path: any, ...args: any[]): any;
export function httpGet(path: any, ...args: any[]): any;
export function httpHead(path: any, ...args: any[]): any;
export function httpMethod(method: any, path: any, ...args: any[]): any;
export function httpPatch(path: any, ...args: any[]): any;
export function httpPost(path: any, ...args: any[]): any;
export function httpPut(path: any, ...args: any[]): any;
export function next(name: any): any;
export function queryParam(name: any): any;
export function request(name: any): any;
export function requestBody(name: any): any;
export function requestHeaders(name: any): any;
export function requestParam(name: any): any;
export function response(name: any): any;
