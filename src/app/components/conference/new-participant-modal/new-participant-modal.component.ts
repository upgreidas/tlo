import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-new-participant-modal',
  templateUrl: './new-participant-modal.component.html',
  styleUrls: ['./new-participant-modal.component.scss'],
})
export class NewParticipantModalComponent implements OnInit {
  currentIndex = 0;

  constructor(
    public dialogRef: MatDialogRef<NewParticipantModalComponent>,
    public memberService: MemberService,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit(): void {}

  onTabChange(index) {
    this.currentIndex = index;
  }

  mute(member) {
    member.muted = !member.muted;
  }

  setAsSpeaker(member) {
    this.memberService.setAsSpeaker(member);
  }
}
