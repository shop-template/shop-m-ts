import dayjs from 'dayjs'
import Cookies from 'universal-cookie'
import { getAddPrefix, getType } from '../utils'

export declare type Cookie = any
export interface CookieGetOptions {
  doNotParse?: boolean
}
export interface BaseCookieSetOptions {
  path?: string
  maxAge?: number
  domain?: string
  secure?: boolean
  httpOnly?: boolean
  sameSite?: boolean | 'none' | 'lax' | 'strict'
  encode?: (value: string) => string
}
export interface CookieSetOptions extends BaseCookieSetOptions {
  expires?: Date
}
export interface MyCookieSetOptions extends BaseCookieSetOptions {
  expires?: Date | number
}
export interface CookieParseOptions {
  decode: (value: string) => string
}
export interface CookiesType {
  get(name: string, options?: CookieGetOptions): any
  get<T>(name: string, options?: CookieGetOptions): T
  getAll(options?: CookieGetOptions): any
  getAll<T>(options?: CookieGetOptions): T
  set(name: string, value: Cookie, options?: MyCookieSetOptions): void
  remove(name: string, options?: MyCookieSetOptions): void
  cookiesInstance: any
}

const cookies = new Cookies()

// https://www.npmjs.com/package/universal-cookie
const myCookies = {
  set(name, value, options?: MyCookieSetOptions) {
    // 对 options 中 expires 参数的简化使用，当设置为 Number 类型的时候，对应的几天，其他情况请自行传入 Date
    if (options && options.expires && getType(options.expires) === 'Number') {
      cookies.set(getAddPrefix(name), value, {
        ...options,
        expires: dayjs().add(7, 'day').toDate(),
      })
    } else {
      cookies.set(getAddPrefix(name), value, options as CookieSetOptions)
    }
  },
  get(name: string, options?: CookieGetOptions) {
    return cookies.get(getAddPrefix(name), options)
  },
  getAll(options?: CookieGetOptions) {
    return cookies.getAll(options)
  },
  remove(name, options) {
    cookies.remove(getAddPrefix(name), options as CookieSetOptions)
  },
  cookiesInstance: cookies,
} as CookiesType

// myCookies.set('aaa', 123456, {
//   path: '/',
//   expires: 7,
// })
// setTimeout(() => {
//   myCookies.remove('aaa', {
//     path: '/',
//   })
// }, 5000)

export default myCookies
