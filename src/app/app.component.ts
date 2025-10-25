import { Component } from '@angular/core';
import { MainComponent } from "./main/main.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [MainComponent, AboutMeComponent, SkillsComponent, MyWorkComponent, ContactComponent]
})
export class AppComponent {
  
}
