import http from 'k6/http';
import {sleep} from 'k6';

export const options={
    stages:[
        { duration: '1s', target: 50 }, // 50 pengguna virtual selama 1 second
        { duration: '3s', target: 100 }, // lonjakan menjadi 100 pengguna virtual selama 3 second
        { duration: '2s', target: 0 }, // turunkan pengguna virtual menjadi 0 selama 2 second
    ]
}

export default function (){
    http.get('https://test.k6.io');
    sleep(1); //waiting in 1 sec
}