import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideLinkedin, lucideMail, lucideMenu, lucideX, lucideExternalLink, lucideDownload, lucideChevronRight } from '@ng-icons/lucide';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })),
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    provideIcons({ lucideGithub, lucideLinkedin, lucideMail, lucideMenu, lucideX, lucideExternalLink, lucideDownload, lucideChevronRight })
  ],
};
