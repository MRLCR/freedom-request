import { HttpRequest, HttpRequestHeaders } from './HttpRequest';
import { HttpResponse } from './HttpResponse';

export type HttpVersion = '1.0'|'1.1'|'2.0'

export enum HttpContentType {
  json = 'application/json:charset=UTF-8',
  form = 'application/x-www-form-urlencoded;charset=UTF-8',
}

export interface HttpInterceptors {
  beforeRequest?: (request: HttpRequest) => HttpRequest;
  afterResponse?: (response: HttpResponse ) => HttpResponse;
}

export interface HttpRequestTransportTools {
  (request: HttpRequest): Promise<HttpResponse>
}

export interface HttpSend {
  (request: HttpRequest): Promise<HttpResponse>
}
export interface HttpConfig {
  headers: HttpRequestHeaders;
}

export interface Http {
  // http 协议版本
  version: HttpVersion;

  // 拦截器
  interceptors: HttpInterceptors;

  // 通用配置
  config: HttpConfig;

  // 请求发送实现封装的 api 运输工具
  transportTools?: HttpRequestTransportTools;

  // 设置 http 协议版本
  setVersion: (version: HttpVersion) => void;
  // 设置 实际发送请求的传输工具
  setTransportTools: (transportTools: HttpRequestTransportTools) => void;
  // 设置 公用的默认 request 头部协议
  setConfigHeaders: (heades: HttpRequestHeaders) => void;

  // 发送请求
  send: HttpSend;
  get: HttpSend;
  post: HttpSend;
  put: HttpSend;
  delete: HttpSend;
  head: HttpSend;

  // 上传文件
  uploadFile: HttpSend;
  // 下载文件
  downloadFile: HttpSend;

  // 自动填充配置中的默认头部信息
  autoFillConfigHeaders: (request: HttpRequest) => HttpRequest;

  // 发送请求前钩子
  beforeSendRequest: (request: HttpRequest) => HttpRequest;
}

export interface adapter {
  adapterRequest: (input: HttpRequest) => any;
  adapterResponse: (input: any) => HttpResponse
}
