import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-conference-members',
  templateUrl: './conference-members.component.html',
  styleUrls: ['./conference-members.component.scss'],
})
export class ConferenceMembersComponent implements OnInit {
  @Output('onChangeSpeaker') speakerEvent = new EventEmitter();

  constructor(public memberService: MemberService) {}

  ngOnInit(): void {}

  mute(member) {
    member.muted = !member.muted;
  }

  setAsSpeaker(member) {
    member.speaker = !member.speaker;
    this.speakerEvent.emit(member);
  }
}
