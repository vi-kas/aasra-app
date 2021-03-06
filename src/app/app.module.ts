import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {
  EventsComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventListResolver,
  EventService,
  EventThumbnailComponent,
} from './events/index';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { HomeComponent } from './home/home.component';
import { TOASTR_TOKEN, IToastr } from './common/services/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './common/errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './projects/project.component';
import { JQ_TOKEN } from './common/services/jquery.service';
import { SimpleModalComponent } from './common/components/simpleModal.component';
import { ModalTriggerDirective } from './common/directives/modalTrigger.directive';
import { TeamComponent } from './home/components/team.component';
import { TitlecardComponent } from './home/components/titlecard.component';
import { FooterComponent } from './common/footer/footer.component';
import { CarousalComponent } from './common/components/carousal.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ProjectThumbnailComponent } from './common/components/projectThumbnail/projectThumbnail.component';
import { TwitterTimelineComponent } from './common/components/twitterTimeline/twitterTimeline.component';
import { VolunteerThumbnailComponent } from './volunteers/components/volunteerThumbnail.component';
import { ImageGallaryComponent } from './common/components/bs-gallery/bsGallery.component';
import { FrontComponent } from './home/front.component';
import { BSCarousalComponent } from './common/components/bs-carousal/bsCaraousal.component';

let toastr: IToastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarousalComponent,
    BSCarousalComponent,
    TeamComponent,
    TitlecardComponent,
    HomeComponent,
    FrontComponent,
    TwitterTimelineComponent,
    EventsComponent,
    VolunteerThumbnailComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    ProjectThumbnailComponent,
    ContactComponent,
    ProjectComponent,
    VolunteersComponent,
    SimpleModalComponent,
    ImageGallaryComponent,
    ModalTriggerDirective,
    Error404Component,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    { provide: 'canDeactivateEventThumbnail', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState() {
  return false; // dummy
}
