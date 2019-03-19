import { Container, inject } from 'inversify'
import { controller, interfaces, httpGet } from 'inversify-koa-utils';
import { provide, buildProviderModule, fluentProvide } from "inversify-binding-decorators";
import TAGS from '../constant/tags'
import Router from 'koa-router'

// 当用到再导出的 流式 provide
let provideThrowable = function () {
  return fluentProvide(identifier)
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
  provideThrowable
}