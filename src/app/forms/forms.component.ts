import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, HttpClientModule],
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  country: string = '';
  occupation: string = '';
  successful: string = '';
  countries: any[] = [];
  occupations: any[] = [];

  constructor(private router: Router, private http: HttpClient) {}
  public data: any;

  ngOnInit() {
    this.fetchDetails()    
  }

  fetchDetails() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe(
      (resp: any) => {
        this.countries = resp.map((country: any) => ({
          name: country.name.common,
          code: country.cca2
        }));
      },
      (error) => {
        console.error('Error fetching country data:', error);
      }
    );
  }

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
