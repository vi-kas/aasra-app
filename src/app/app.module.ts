import { BrowserModule } from '@angular/platform-browser';
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
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './projects/project.component';
import { JQ_TOKEN } from './common/services/jquery.service';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/directives/modalTrigger.directive';
import { TeamComponent } from './home/team.component';
import { TitlecardComponent } from './home/titlecard.component';

let toastr: IToastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamComponent,
    TitlecardComponent,
    HomeComponent,
    EventsComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    ContactComponent,
    ProjectComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    Error404Component,
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },
    { provide: JQ_TOKEN, useValue: jQuery },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    { provide: 'canDeactivateEventThumbnail', useValue: checkDirtyState },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function checkDirtyState() {
  return false; // dummy
}
