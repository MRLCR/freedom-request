import { FreeFetch } from '@/index';
import { HttpConfig, HttpContentType } from '@/core/Http/types/Http';

const config: HttpConfig = {
  headers: {
    "Content-Type": HttpContentType.json,
  },
}
const freeFetch = new FreeFetch(config);

function sendRequest() {
  console.log('send start');
  freeFetch.send({
    url: 'https://www.zhihu.com/api/v4/answer_later/count',
  });
}

window.onload = () => {
  console.log('onload');
  const app = document.getElementById("app");
  if (app) {
    app.addEventListener('click', () => {
      sendRequest();
    });
  }
}
