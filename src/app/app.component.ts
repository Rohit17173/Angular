import { Component } from '@angular/core';
import { AdditionService } from './addition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyApp';
  constructor(private additionService: AdditionService){}
  num1!:number;
  num2!:number;
  result!:number;

  add(){
    console.log(this.num1);
    console.log(this.num2);

    this.additionService.addition(this.num1,this.num2).subscribe((res)=>{
      this.result=res;
    });
  }

  sub(){
    console.log(this.num1);
    console.log(this.num2);

    this.additionService.substraction(this.num1,this.num2).subscribe((res)=>{
      this.result=res;
    });
  }

  mul(){
    console.log(this.num1);
    console.log(this.num2);

    this.additionService.multiplication(this.num1,this.num2).subscribe((res)=>{
      this.result=res;
    });
  }

  div(){
    console.log(this.num1);
    console.log(this.num2);

    this.additionService.division(this.num1,this.num2).subscribe((res)=>{
      this.result=res;
    });
  }
}
