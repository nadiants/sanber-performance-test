import http from 'k6/http';
import { group, check, sleep } from 'k6';

export default function () {
    group('Performance Reqres Get All User', () => {
        let response = http.get('https://reqres.in/api/users?page=2');
        
        // Memeriksa apakah status response adalah 200 (OK)
        check(response, {
        'status is 200': (r) => r.status === 200,
        })

        // Memeriksa apakah response time kurang dari 200 ms
        check(response, {
       'response time is less than 200ms': (r) => r.timings.duration < 200,
        })

        // Memeriksa apakah response body tidak kosong
        check(response, {
        'response body is not empty': (r) => r.body.length > 0,
        })
    })
  
  // Tunggu 1 detik sebelum melakukan request berikutnya
  sleep(1);
}