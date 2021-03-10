import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { WellListComponent } from './well-list/well-list.component';
import { WellComponent } from './well/well.component';

@NgModule({
  declarations: [
    AppComponent,
    WellListComponent,
    WellComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
