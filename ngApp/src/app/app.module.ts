import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { EventService } from './services/event.service';
import { AuthGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [AuthService, EventService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
