import { HttpRequest } from './HttpRequest';
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

export interface HttpSend {
  (request: HttpRequest): Promise<HttpResponse>
}

export interface Http {
  readonly version: HttpVersion;
  request: HttpRequest;
  response: HttpResponse;
  interceptors: HttpInterceptors;

  send: HttpSend;

  get: HttpSend;
  post: HttpSend;
  put: HttpSend;
  delete: HttpSend;
  head: HttpSend;

  uploadFile: HttpSend;
  downloadFile: HttpSend;

}
