import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class WindowRef {
  private window: Window | undefined;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.window = window;
    }
  }

  get nativeWindow(): Window | undefined {
    return this.window;
  }
}
