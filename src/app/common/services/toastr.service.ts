import { InjectionToken } from '@angular/core';

// Toastr Dependency Injection
export let TOASTR_TOKEN = new InjectionToken<any>('toastr');

export interface IToastr {
  success(message: string, title?: string): void;
  info(message: string, title?: string): void;
  warning(message: string, title?: string): void;
  error(message: string, title?: string): void;
}
