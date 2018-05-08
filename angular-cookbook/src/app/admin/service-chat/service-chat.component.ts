import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../chat.service';

@Component({
  selector: 'app-service-chat',
  templateUrl: './service-chat.component.html',
  styleUrls: ['./service-chat.component.scss']
})
export class ServiceChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }

  messages = [{text:'How are you?', owner: 'Katrin'},{text:'I am great!', owner: 'Birna'}];

  ngOnInit() {
    this.chatService.getMessages();

  }

}
