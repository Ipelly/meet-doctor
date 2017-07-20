import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';


@Component({
    selector: 'app-message-list',
    template: `
            <div class='col-md-8 col-md-offset-2' *ngFor="let message of messages">
                <app-message [message]="message" (editClicked)="message.content = $event"></app-message>
            </div>
        `
})
export class MessageListComponent implements  OnInit{
    
    messages : Message[];
    ngOnInit(){
        this.messages = this.messageService.getMessages();
    }
    constructor(private messageService:MessageService){}
}