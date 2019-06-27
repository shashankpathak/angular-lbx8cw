import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { userDataService } from './user.service';
import { OrderBy } from './sort.pipe';
import { UserPipe } from './username.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, NgxPaginationModule ],
  declarations: [ AppComponent, HelloComponent, OrderBy, UserPipe ],
  bootstrap:    [ AppComponent ],
  providers: [userDataService]
})
export class AppModule { }
