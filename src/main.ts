import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  // production build cancel all console statement
  window.console.log = (...args) => {};
  window.console.warn = (...args) => {};
  window.console.error = (...args) => {};
  window.console.debug = (...args) => {};
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
