import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // @Output to send data to parent component.
  @Output() navBarSelectedItemEvent = new EventEmitter<string>();
  @Output() isNavBarOpenedEvent = new EventEmitter<boolean>();
  public isNavBarOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  } 

  public toParentSelectedNavBar(value: string): void {
    this.navBarSelectedItemEvent.emit(value);
  }

  public toParentNavBarOpened(): void {
    this.isNavBarOpenedEvent.emit(this.isNavBarOpened);
  }

  public navtoggle(): void {
    this.isNavBarOpened = !this.isNavBarOpened;
    this.toParentNavBarOpened();
  }

}
