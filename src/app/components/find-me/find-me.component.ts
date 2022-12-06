import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.css']
})
export class FindMeComponent implements OnInit {

  // Font Awesome linkedIn icon
  faLinkedin = faLinkedin;
  faCopy = faCopy;
  
  constructor() { }

  ngOnInit(): void {
  }

}
