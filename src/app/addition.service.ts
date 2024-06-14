import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionService {

  constructor(private http:HttpClient) { }

  addition(num1:number, num2:number):Observable<any>{
    console.log("service layer")
    const par={num1,num2};
    console.log(par);

    return this.http.post<any>("http://localhost:8080/add",par);
  }

  substraction(num1:number, num2:number):Observable<any>{
    console.log("service layer")
    const par={num1,num2};
    console.log(par);

    return this.http.post<any>("http://localhost:8080/sub",par);
  }

  multiplication(num1:number, num2:number):Observable<any>{
    console.log("service layer")
    const par={num1,num2};
    console.log(par);

    return this.http.post<any>("http://localhost:8080/mul",par);
  }

  division(num1:number, num2:number):Observable<any>{
    console.log("service layer")
    const par={num1,num2};
    console.log(par);

    return this.http.post<any>("http://localhost:8080/div",par);
  }
}
