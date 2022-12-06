import { Component, OnInit } from '@angular/core';
import { faPeace } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // importing font awesome icon
  faPeace = faPeace;

  constructor() { }

  ngOnInit(): void {
  }

}
