import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-nav',
  templateUrl: './secondary-nav.component.html',
  styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent implements OnInit {

  menuStatus = false;

  constructor() { }

  ngOnInit() {
  }

  onMenuToggle() {
    this.menuStatus = !this.menuStatus;
  }

}
