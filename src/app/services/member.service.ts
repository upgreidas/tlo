import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  members = [
    {
      name: 'Viewer 1',
      muted: false,
      speaker: false,
    },
    {
      name: 'Viewer 2',
      muted: false,
      speaker: false,
    },
    {
      name: 'Viewer 3',
      muted: false,
      speaker: false,
    },
    {
      name: 'Viewer 4',
      muted: false,
      speaker: false,
    },
    {
      name: 'Viewer 5',
      muted: false,
      speaker: false,
    },
    {
      name: 'Viewer 6',
      muted: false,
      speaker: false,
    },
  ];

  onSpeakerChange = new Subject();

  constructor() {}

  setAsSpeaker(member) {
    member.speaker = !member.speaker;

    this.onSpeakerChange.next(member);
  }
}
