import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  country: string = '';
  occupation: string = '';
  successful: string = '';

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      if (this.successful === 'true') {
        // this.toastr.success('Form submitted successfully!', 'Success');
        this.router.navigate(['/success']);
      } else {
        // this.toastr.error('Form submission failed. Please try again.', 'Error');
        this.router.navigate(['/']);
      }
    } else {
      // this.toastr.warning('Please fill out all required fields.', 'Warning');
    }
    }
}

