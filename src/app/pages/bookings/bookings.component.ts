import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.model';
import { BookingResumeComponent } from '../../components/booking/booking-resume/booking-resume.component';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule, HeaderComponent,FooterComponent,BookingResumeComponent],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {
  
  bookingList:Booking[] =[];
  menu:string[]=[]
  constructor(private boookingService:BookingService){}

  ngOnInit(): void {
    this.boookingService.getConfirmBookings().subscribe((data:Booking[]) =>{
      this.bookingList = data;
    })
  }


}
