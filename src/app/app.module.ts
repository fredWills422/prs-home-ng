import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { BaseComponent } from './base/base.component';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    BaseComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
