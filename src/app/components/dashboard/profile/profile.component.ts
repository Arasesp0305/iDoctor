import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '@angular/fire/auth';
import { PersonService } from '../../../services/person.service';
import { DataSnapshot } from '@angular/fire/database';
import { Person } from '../../../models/person.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private authService:AuthService){}
}
