import { HttpContentType } from '../types/Http';
import { HttpResponse, HttpResponseStatus } from '../types/HttpResponse';

export class Response implements HttpResponse {
  status = HttpResponseStatus.success;

  headers = {
    'Content-Type': HttpContentType.json,
  };
}

export const response = new Response();
