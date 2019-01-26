import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from "@angular/forms";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user = {
    email : null,
    password : null,
  }
  public signupForm : FormGroup;
  
  constructor(private modalService: NgbModal, private formbuilder : FormBuilder) { }
 

  SignUP(){
    console.log("Yeah it happend");
    

    // localStorage.setItem('credentials', JSON.stringify(this.signupForm));
    // console.log("Here is The object", JSON.parse(localStorage.getItem('credentials')  ));
    
  }
  ngOnInit() {
    this.signupForm = this.formbuilder.group({
      email : '',
      password: ''
    })
    this.signupForm.valueChanges.subscribe(console.log);
    console.log(typeof this.signupForm);
    
  }

}
