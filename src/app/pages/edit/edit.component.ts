import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { BookingFormComponent } from '../../components/booking/booking-form/booking-form.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, HeaderComponent,FooterComponent,BookingFormComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {

}
