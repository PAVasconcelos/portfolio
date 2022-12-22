import { Component, HostListener, ViewChild } from '@angular/core';
import { bottom } from '@popperjs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public getScreenWidth: any;
  public getScreenHeight: any;
  public isNavBarOpened: boolean = false;

  ngOnInit() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    this.getScreenHeight = window.innerHeight;
  }

  public setIsNavBarOpened(value: boolean): void {
    this.isNavBarOpened = value;
  }

  public scrollToSection(section: string): void {
    if (section === "About") {
      scrollTo(0, 70);
    }
    else if (section === "Career" && this.getScreenWidth > 575) {
      scrollTo(0, 410);
    }
    else if (section === "Career" && this.getScreenWidth > 575) {
      scrollTo(0, 585);
    }
    else if (section === "Career" && this.getScreenWidth < 575 && this.getScreenWidth > 391) {
      scrollTo(0, 530);
    }
    else if (section === "Career" && this.getScreenWidth < 390) {
      scrollTo(0, 590);
    }
    else if (section === "Skills" || section === "FindMe") {
      scrollTo(0, 99999);
    }

  }

}