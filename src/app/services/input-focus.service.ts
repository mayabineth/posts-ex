import { Injectable } from '@angular/core';
import {  Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InputFocusService {
  private isFocus: Subject<boolean>;

  constructor() {
    this.isFocus = new Subject<boolean>();
  }

  getValue(): Observable<boolean> {
    return this.isFocus;
  }
  setValue(newValue: boolean): void {
    this.isFocus.next(newValue);
  }
}
