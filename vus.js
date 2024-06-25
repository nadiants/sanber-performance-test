import http from 'k6/http';
import {sleep} from 'k6';

export let options ={
    vus : 50, //pengguna ada 50
    duration: '5s'
}

export default function (){
    http.get('https://test.k6.io');
    sleep(1); //waiting in 1 sec
}