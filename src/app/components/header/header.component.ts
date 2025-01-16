import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged, User } from '@angular/fire/auth';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PersonService } from '../../services/person.service';
import { Person } from '../../models/person.model';
import { DataSnapshot } from '@angular/fire/database';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router, private personService:PersonService){}

  isLoggedIn: boolean = false;
  role:string|null=null;

  ngOnInit(): void {
    
    this.authService.getUserDataAuth().subscribe(({user,person})=>{
      if(user){
        this.isLoggedIn = true;
        if(person && person.role){
          this.role = person.role;
        }
      }else{
        this.isLoggedIn = false;
      }
    })
  }

  logout(){
    this.authService.logout().then(()=>{
      this.router.navigate(["/"]);
    }).catch((error)=>{console.log(error)});;
  }
}
