import { provide, TYPES } from '../ioc/ioc'
// TYPES
import * as fetch from 'node-fetch'
import { ISafeRequest } from '../interface/ISafeRequest'

@provide(TYPES.SafeRequest)
class SafeRequest implements ISafeRequest {
 public async fetch(url: string, arg?: Object, callback?: Function): Promise<Object> {
    let result = { code: "error"}
    await fetch(url)
    return result
 }
}






