import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NavigationEnd, RouteConfigLoadStart, NavigationError } from '@angular/router';

import { LoggerService } from '@core/log/logger.service';
import { AuthService } from '@core/auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private acRoute: ActivatedRoute,
    private logger: LoggerService,
    private authService: AuthService,
  ) {
    router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
         console.log(evt);
      }
  });
  }


  ngOnInit() {
    if (!this.authService.checkLogin()) {
      this.router.navigate(['/login']);
    }
  }


}
