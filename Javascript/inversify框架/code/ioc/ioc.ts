import { Container, inject } from 'inversify'
import { controller, interfaces, httpGet } from 'inversify-koa-utils';
import { provide, buildProviderModule } from "inversify-binding-decorators";
import TAGS from '../constant/tags'
import Router from 'koa-router'

export {
  Container,
  controller,
  interfaces,
  httpGet,
  Router,
  inject,
  TAGS,
  provide
}