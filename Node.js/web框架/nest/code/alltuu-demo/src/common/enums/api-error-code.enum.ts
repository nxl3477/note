export enum ApiErrorCode {
  TIMEOUT = -1, // 系统繁忙
  SUCCESS = 0, // 成功

  USER_ID_INVALID = 10001, // 用户id无效
  USER_NAME_INVALID = 10002, // 用户 姓名 无效
  USER_AGE_INVALID = 10003 // 用户年龄无效
}