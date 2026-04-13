import http from 'k6/http';

export let options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '10s', target: 20 },
    { duration: '5s', target: 0 },
  ],
};

export default function () {
  http.get('http://localhost:8080');
}
