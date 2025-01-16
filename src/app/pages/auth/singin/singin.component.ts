import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { HeaderComponent } from '../../../components/header/header.component';
import { Person, ROLE } from '../../../models/person.model';
import { UserCredential } from '@angular/fire/auth';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule,HeaderComponent,FooterComponent],
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent {

  registerForm:FormGroup;

  constructor(formBuilder:FormBuilder,private authService:AuthService, private router:Router, private personService:PersonService){
    this.registerForm = formBuilder.group({
      'name': ['', [Validators.required]],
      'surname': ['', [Validators.required]],
      'admin': ['', []],
      'email': ['', [Validators.email]],
      'password': ['', [Validators.required]]
    });
  }
  register(){
    if(this.registerForm.valid){
      let name = this.registerForm.get("name")?.value;
      let surname = this.registerForm.get("surname")?.value;
      let admin = this.registerForm.get("admin")?.value;
      let email = this.registerForm.get("email")?.value;
      let password = this.registerForm.get("password")?.value;

      
      
      this.authService.register({email,password})
      .then((userCredential:UserCredential)=>{

        let persona = new Person(userCredential.user.uid,name,surname,admin,ROLE.USER,new Date().toLocaleDateString())
       
        if(admin == "true"){
          persona.role = ROLE.ADMIN
        }
        this.personService.savePerson(persona).then(()=>{
          this.router.navigate(["/home"]);

        })
      }).catch(error=>{
        console.log(error)
      });
    }
  }
}
