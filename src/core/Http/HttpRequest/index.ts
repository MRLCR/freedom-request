import { HttpRequest, HttpMethod } from '../types/HttpRequest';

export class Request implements HttpRequest {
  path = '';

  data = {};

  method = HttpMethod.get;

  headers = {};

  constructor(request?: HttpRequest) {
    Object.assign(this, request);
  }
}

export const request = new Request();
