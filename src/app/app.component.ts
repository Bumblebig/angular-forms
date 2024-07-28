import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { ToastrService, ToastrModule } from 'ngx-toastr';
import { FormsComponent } from "./forms/forms.component";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'country-forms';

  // constructor(private toastr: ToastrService) {}

  // showSuccess() {
  //   this.toastr.success('Form submitted successfully!', 'Success');
  // }

  // showError() {
  //   this.toastr.error('Form submission failed. Please try again.', 'Error');
  // }
}
