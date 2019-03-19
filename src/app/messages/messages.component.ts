import { Component, OnInit } from '@angular/core';
import {MessageService} from '../models/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {
  }

  ngOnInit() {
    for (let message of this.messageService.messages) {
      console.log(message);
    }
  }

}
