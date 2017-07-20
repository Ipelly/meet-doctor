import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { routing } from "./app.routing";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { MessageComponent } from "./message/message.component";
import { MessageListComponent } from "./message/message-list.component";
import { MessageInputComponent } from "./message/message-input.component";
import { MessagesComponent } from "./message/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { LogoutComponent } from "./auth/logout.component";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { ErrorComponent } from "./errors/error.component";
import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ErrorComponent  
    ],
    imports: [BrowserModule, 
                FormsModule, 
                routing,
                ReactiveFormsModule,
                HttpModule],
    bootstrap: [AppComponent],
    providers:[AuthService,ErrorService]
})
export class AppModule {

}