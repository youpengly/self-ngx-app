import { TestBed, async, inject } from '@angular/core/testing';

import { SettingsService } from '../setting/setting.service';
import { App, User } from './interface';

describe('Service: Settings', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [SettingsService],
    });
  });

  it(
    'should create an instance',
    inject([SettingsService], (service: SettingsService) => {
      expect(service).toBeTruthy();
    }),
  );

  describe('#setLayout', () => {
    it(
      'should be setting lang',
      inject([SettingsService], (service: SettingsService) => {
        service.setLayout('lang', 'zh-cn');
        expect(service.layout.lang).toBe('zh-cn');
      }),
    );

    it(
      'should be setting no exists key lang1',
      inject([SettingsService], (service: SettingsService) => {
        expect(service.setLayout('lang1', 'zh-cn')).toBeFalsy();
      }),
    );
  });

  it(
    'should be setting app',
    inject([SettingsService], (service: SettingsService) => {
      const app = <App>{
        name: `self-ng-app`,
        description: 'description',
        year: 2018,
      };
      service.setApp(app);
      expect(service.app.name).toBe(app.name);
      expect(service.app.description).toBe(app.description);
      expect(service.app.year).toBe(app.year);
    }),
  );

  it(
    'should be setting user',
    inject([SettingsService], (service: SettingsService) => {
      const user = <User>{
        name: `admin`,
        avatar: 'description',
        email: 'test@qq.com',
      };
      service.setUser(user);
      expect(service.user.name).toBe(user.name);
      expect(service.user.avatar).toBe(user.avatar);
      expect(service.user.email).toBe(user.email);
    }),
  );
});

