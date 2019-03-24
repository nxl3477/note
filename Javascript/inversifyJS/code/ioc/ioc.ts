import { Container, inject } from 'inversify'
import { controller, interfaces, httpGet, TYPE } from 'inversify-koa-utils';
import { provide, buildProviderModule, fluentProvide } from "inversify-binding-decorators";
import TAGS from '../constant/tags'
import TYPES from '../constant/types'
import Router from 'koa-router'

// 当用到再导出的 流式 provide
let provideThrowable = function (identifier, name) {
  return fluentProvide(identifier)
  // 找到立即执行
    .whenTargetNamed(name)
    .done()
}


export {
  Container,
  controller,
  interfaces,
  httpGet,
  Router,
  inject,
  TAGS,
  provide,
  provideThrowable,
  buildProviderModule,
  TYPE,
  TYPES
}