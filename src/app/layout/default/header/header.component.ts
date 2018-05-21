import { Component, OnInit } from '@angular/core';

import { SettingsService } from '@shared/setting/setting.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public collapsed: boolean;
  constructor(
    public setting: SettingsService
  ) {
  }

  toggleCollapsedSidebar() {
    console.log('toogle collapsed sidebar');
    this.collapsed = !this.collapsed;
    this.setting.layout.collapsed = this.collapsed;
    this.setting.setLayout('collapsed', this.setting.layout.collapsed);
    document.querySelector('body').classList.toggle('aside-collapsed');
  }


  ngOnInit() {
    this.collapsed = false;
    this.setting.layout.collapsed = false;
  }


}
