import http from 'k6/http';
import {sleep} from 'k6';

export default function (){
    //URL, Header, Request Payload
    // data pengguna baru yang akan di-create
    let payload = JSON.stringify({
        name: 'Nama' + ' ' + randomIntBetween(1,100),
        job: 'QA Engineer' + ' ' + randomIntBetween(1,100)
    });

    //Header
    let headers = {
        "Content-Type" : 'application/json'
    };

    //Melakukan post request
    let response = http.post('https://reqres.in/api/users', payload, {headers : headers});
    console.log(JSON.stringify(response.json()))
    console.log(JSON.stringify(payload))
    //menampilkan response
    /*
    console.log(JSON.stringify(response.body))
    console.log(JSON.stringify(response.json()))
    console.log(JSON.stringify(payload))
    console.log(JSON.stringify(response))
    */

    sleep(1); //waiting in 1 sec
}