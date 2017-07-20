import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-messages',
    template: `
            <div class="row">
                <app-message-input></app-message-input>
            </div>
            <hr>
            <div class="row">
                <app-message-list></app-message-list>
            </div>
        `
})
export class MessagesComponent {
    @Input() message : Message;
    @Output() editClicked = new EventEmitter<string>();

    color = "red";
    onEdit() {
        this.editClicked.emit('A new message has been emitted!!!')
        //alert('A new message has been emitted!!!');
    }
}