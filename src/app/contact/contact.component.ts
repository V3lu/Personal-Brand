import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

    nameSignal = signal('')
    mailSignal = signal('')
    messageSignal = signal('')

    RedirectToGH(){
        window.open("https://github.com/V3lu", "_blank")
    }

    RedirectToLI(){
        window.open("https://www.linkedin.com/in/adam-krzysztof-wielog%C3%B3rski-217ba8321/", "_blank")
    }

    RedirectToX(){
        window.open('https://x.com/_AdamWi', '_blank');
    }

    assignName(event : Event){
        const value = (event.target as HTMLInputElement).value;
        this.nameSignal.set(value);
    }
    assignMail(event : Event){
        const value = (event.target as HTMLInputElement).value;
        this.mailSignal.set(value);
    }
    assignMessage(event : Event){
        const value = (event.target as HTMLInputElement).value;
        this.messageSignal.set(value);
    }

    Submit(){
        
    }
}
