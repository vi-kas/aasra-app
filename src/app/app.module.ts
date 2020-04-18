import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/services/toastr.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EventsComponent,
    EventThumbnailComponent,
  ],
  providers: [EventService, ToastrService],
  bootstrap: [AppComponent],
})
export class AppModule {}
