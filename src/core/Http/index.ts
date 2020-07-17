import { Http, HttpVersion, HttpSend } from './types/Http';
import { HttpRequest } from './types/HttpRequest';
import { request } from './HttpRequest';
import { response, Response } from './HttpResponse';

export class BaseHttp implements Http {
  version = '1.1' as HttpVersion;

  request = request;

  response = response;

  interceptors = {};

  send(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

  get(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

  post(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

  put(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

  delete(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

  head(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

  uploadFile(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

  downloadFile(request: HttpRequest) {
    const response = new Response();
    return Promise.resolve(response)
  };

}
