import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MemberService } from 'src/app/services/member.service';
import { ConferenceMembersComponent } from '../../conference/conference-members/conference-members.component';
import { NewParticipantModalComponent } from '../../conference/new-participant-modal/new-participant-modal.component';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.scss'],
})
export class ConferenceComponent implements OnInit {
  participants = [
    {
      name: 'Participant 1',
      muted: false,
      image: 'https://picsum.photos/320/180',
      url: null,
    },
  ];

  lastParticipant = 1;

  onCall = false;

  videoTarget = 'none';

  muted = false;

  sidebarMode = null;

  @ViewChild('memberList') memberList: ConferenceMembersComponent;

  constructor(
    private dialog: MatDialog,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.memberService.onSpeakerChange.subscribe((member) => {
      this.toggleSpeaker(member);
    });
  }

  addParticipant() {
    this.lastParticipant++;

    const key = Date.now();

    const participant = {
      name: '',
      muted: false,
      image: `https://picsum.photos/320/180?t=${Date.now()}`,
      url: 'http://theliveoffice.com/conference/' + key,
    };

    const dialog = this.dialog.open(NewParticipantModalComponent, {
      data: { participant },
      width: '500px',
    });

    dialog.afterClosed().subscribe((res) => {
      if (res && this.participants.length < 9) {
        this.participants.push(res);
      }
    });
  }

  removeParticipant(participant) {
    this.participants = this.participants.filter((p) => p !== participant);

    const member = this.memberService.members.find(
      (m) => m.name === participant.name
    );

    if (member) {
      member.speaker = false;
    }
  }

  toggleSpeaker(member) {
    if (member.speaker) {
      if (this.participants.length < 9) {
        this.participants.push({
          name: member.name,
          muted: false,
          image: `https://picsum.photos/320/180?t=${Date.now()}`,
          url: null,
        });
      } else {
        member.speaker = false;
      }
    } else {
      this.participants = this.participants.filter(
        (p) => p.name !== member.name
      );
    }
  }

  call() {
    this.onCall = true;
    this.videoTarget = 'none';
  }

  endCall() {
    this.onCall = false;
  }

  toggleMic() {
    this.muted = !this.muted;
  }

  toggleSidebar(mode: string) {
    this.sidebarMode = this.sidebarMode === mode ? null : mode;
  }
}
