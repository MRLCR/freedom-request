import { BaseHttp } from '@core/Http';
import { HttpConfig, adapter } from '@core/Http/types/Http';
import { HttpRequest, HttpMethod } from '@core/Http/types/HttpRequest';
import { HttpResponse } from '@core/Http/types/HttpResponse';

export class FreeFetch extends BaseHttp implements adapter {
  constructor(config: HttpConfig) {
    super(config);

    const request = (request: HttpRequest) => (
      fetch(...this.adapterRequest(request))
        .then(this.adapterResponse)
    )
    this.setTransportTools(request);
  }

  adapterRequest(request: HttpRequest): [string, RequestInit] {
    const adaptedReq: RequestInit = {};
    adaptedReq.method = request.method;
    adaptedReq.body = request.body;
    adaptedReq.headers = request.headers;
    return [request.url, adaptedReq];
  }

  adapterResponse(response: Response): HttpResponse {
    const adaptedRes: HttpResponse = { status: 200 };

    return adaptedRes;
  }
}
