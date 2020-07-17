import { HttpContentType } from './Http';

export enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  delete = 'DELETE',
  head = 'HEAD',
  options = 'OPTIONS',
  patch = 'PATCH',
  connect = 'CONNECT',
  trace = 'TRACE',
}

export interface HttpRequestData {
  [props: string]: any;
}

export interface HttpRequestHeaders {
  'Content-Type'?: HttpContentType;
  'Authorization'?: string;
  'Accept'?: string;
  'Cache'?: string;
  [props: string]: string | number | boolean | undefined | null;
}

export interface HttpRequest {
  path: string;
  data?: HttpRequestData;
  method?: HttpMethod;
  headers?: HttpRequestHeaders;
}

export interface HttpRequestConstructor {
  new (request: HttpRequest): void;
}
