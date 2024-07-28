// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { ToastrModule } from 'ngx-toastr'; // Import ToastrModule

@NgModule({
  imports: [
    BrowserAnimationsModule, // Include BrowserAnimationsModule
    ToastrModule.forRoot({ // Initialize ToastrModule with default options
      positionClass: 'toast-top-right',
      timeOut: 3000,
      preventDuplicates: true
    })
  ],
  exports: [ // Export modules to use in other components
    BrowserAnimationsModule,
    ToastrModule
  ]
})
export class SharedModule { }
