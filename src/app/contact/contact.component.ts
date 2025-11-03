import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


    RedirectToGH(){
        window.open("https://github.com/V3lu", "_blank")
    }

    RedirectToLI(){
        window.open("https://www.linkedin.com/in/adam-krzysztof-wielog%C3%B3rski-217ba8321/", "_blank")
    }

    RedirectToX(){
        window.open('https://x.com/_AdamWi', '_blank');
    }
}
