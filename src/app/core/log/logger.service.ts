import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
@Injectable()
export class LoggerService {

  constructor() { }

  log(...args) {
    if (!environment.production) {
      console.log.apply(console, args);
    }
  }
  warn(...args) {
    if (!environment.production) {
      console.warn.apply(console, args);
    }
  }
  error(...args) {
    if (!environment.production) {
      console.error.apply(console, args);
    }
  }

}
