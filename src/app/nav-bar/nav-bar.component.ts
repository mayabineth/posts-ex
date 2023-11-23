import { Component, OnInit } from '@angular/core';
import { InputFocusService } from '../services/input-focus.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit{
  isBoldTitle: boolean = false;
  constructor(private inputFocusService: InputFocusService) {}
  ngOnInit() {
    //get on focus or on blur on edit input elements
    this.inputFocusService.getValue().subscribe((value) => {
      this.isBoldTitle = value;
    });
  }
}
