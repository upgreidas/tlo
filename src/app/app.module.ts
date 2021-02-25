import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftSidenavComponent } from './components/layout/left-sidenav/left-sidenav.component';
import { ConferenceComponent } from './components/pages/conference/conference.component';
import { FormsModule } from '@angular/forms';
import { ConferenceMembersComponent } from './components/conference/conference-members/conference-members.component';
import { ConferenceChatComponent } from './components/conference/conference-chat/conference-chat.component';
import { NewParticipantModalComponent } from './components/conference/new-participant-modal/new-participant-modal.component';
import { MemberService } from './services/member.service';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidenavComponent,
    ConferenceComponent,
    ConferenceMembersComponent,
    ConferenceChatComponent,
    NewParticipantModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatListModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
  ],
  providers: [MemberService],
  bootstrap: [AppComponent],
})
export class AppModule {}
