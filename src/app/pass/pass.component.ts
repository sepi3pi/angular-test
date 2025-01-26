import { Component, createNgModule, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pass',
  imports: [MatCardModule, MatButtonModule,CommonModule,MatInputModule,ReactiveFormsModule],
  templateUrl: './pass.component.html',
  styleUrl: './pass.component.css'
})
export class PassComponent implements OnInit {
onSubmit(): void {
  if (this.myForm.valid){
    console.log('accept:',this.myForm.value);
  } else{
    console.log('not accept!');
  }
throw new Error('Method not implemented.');
}
  countdown: number = 10;
  isLink: string='start'
  myForm:FormGroup

/**
 *
 */
constructor(private fb:FormBuilder) {
  this.myForm=this.fb.group({
    name: ['',[Validators.required,Validators.maxLength(5)]]

  })

}

  ngOnInit(): void {
  this.isLink ='start'
    this.startCountdown();
  }
  startCountdown(): void {
    const timer = setInterval(() => {

      this.countdown--;
      if (this.countdown <= 0) {
        this.isLink ='end'
        clearInterval(timer);
      }
    }, 1000);
  }

resendCode(): void{
  this.isLink ='start'
  this.countdown = 10;
  this.startCountdown();

  console.log('کد مجددا ارسال شد');
}

changeEmail(): void {
  console.log('ایمیل تغییر داده شد');
}
}


