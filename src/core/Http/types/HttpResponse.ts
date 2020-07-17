import { HttpContentType } from './Http';

export enum HttpResponseStatus {
  success = 200,
  movedPermanentlty = 301,
  found = 302,
  seeOther = 303,
  notModified = 304,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  methodNotAllowed = 405,
  internalServerError = 500,
  notImplemented = 501,
  badGateway = 502,
  serviceUnavailable = 503,
  gatewayTimeout = 504,
  httpVersionNotSupported = 505,

}

export interface HttpResponseHeaders {
  'Content-Type': HttpContentType;
  'Content-Length'?: number;
  ETag?: string;
  [props: string]: string | number | boolean | undefined | null;
}


export interface HttpResponse {
  status: HttpResponseStatus | number;
  headers: HttpResponseHeaders;
  body?: string;
}
