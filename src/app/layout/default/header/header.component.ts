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
    const appRoot = document.querySelector('app-root');
    console.log(appRoot);
    appRoot.classList.toggle('aside-collapsed');
  }


  ngOnInit() {
    this.collapsed = true;
  }


}
