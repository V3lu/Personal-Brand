import { Component, ElementRef, ViewChild } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { MyWorkComponent } from "./my-work/my-work.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [AboutMeComponent, SkillsComponent, MyWorkComponent, ContactComponent]
})
export class AppComponent {
  
    @ViewChild('home')
    homeRef: ElementRef | undefined;

    @ViewChild('about')
    aboutRef: ElementRef | undefined;

    @ViewChild('skills')
    skillsRef: ElementRef | undefined;

    @ViewChild('mywork')
    myWorkRef: ElementRef | undefined;

    @ViewChild('contact')
    contactRef: ElementRef | undefined;

    ScrollToHome(){
        this.homeRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    ScrollToAbout(){
        this.aboutRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    ScrollToSkills(){
        this.skillsRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    ScrollToMyWork(){
        this.myWorkRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    ScrollToContact(){
        this.contactRef?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }

    RedirectToGH(){
        window.open("https://github.com/V3lu", "_blank")
    }

    RedirectToLI(){
        window.open("https://www.linkedin.com/in/adam-krzysztof-wielog%C3%B3rski-217ba8321/", "_blank")
    }

    SendEmail(){
        window.open('mailto:adamwi.business@gmail.com', '_self');
    }
}
