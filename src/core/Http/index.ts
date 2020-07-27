import { Http, HttpVersion, HttpRequestTransportTools, HttpConfig } from './types/Http';
import { HttpRequest, HttpMethod, HttpRequestHeaders } from './types/HttpRequest';

export class BaseHttp implements Http {

  version = '1.1' as HttpVersion;

  interceptors = {};

  config = {
    headers: {},
  };

  transportTools?: HttpRequestTransportTools;

  constructor(config: Partial<HttpConfig>) {
    this.setConfigHeaders(config.headers || {});
  }

  setVersion(version: HttpVersion) {
    this.version = version;
  }

  setTransportTools (transportTools: HttpRequestTransportTools) {
    this.transportTools = transportTools;
  }

  setConfigHeaders(headers: HttpRequestHeaders) {
    this.config.headers = headers;
  }

  send(request: HttpRequest) {
    if (!this.transportTools) {
      throw Error('Please set http transportTools frist');
    }
    request = this.beforeSendRequest(request);
    return this.transportTools(request);
  }

  get(request: HttpRequest) {
    request.method = HttpMethod.get;
    return this.send(request);
  }

  post(request: HttpRequest) {
    request.method = HttpMethod.post;
    return this.send(request);
  }

  put(request: HttpRequest) {
    request.method = HttpMethod.put;
    return this.send(request);
  }

  delete(request: HttpRequest) {
    request.method = HttpMethod.delete;
    return this.send(request);
  }

  head(request: HttpRequest) {
    request.method = HttpMethod.head;
    return this.send(request);
  }

  // TODO:
  uploadFile(request: HttpRequest) {
    request.method = HttpMethod.post;
    return this.send(request);
  }

  // TODO: 
  downloadFile(request: HttpRequest) {
    request.method = HttpMethod.get;
    return this.send(request);
  }

  autoFillConfigHeaders(request: HttpRequest): HttpRequest {
    request.headers = Object.assign({}, request.headers, this.config.headers);
    return request
  }

  beforeSendRequest(reuqest: HttpRequest): HttpRequest {
    reuqest = this.autoFillConfigHeaders(reuqest);
    return reuqest;
  }

}
