import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public collapsed: boolean;
  constructor(
  ) {
  }

  toggleCollapsedSidebar() {
    this.collapsed = !this.collapsed;
    document.querySelector('body').classList.toggle('aside-collapsed');
  }


  ngOnInit() {
    this.collapsed = true;
  }


}
