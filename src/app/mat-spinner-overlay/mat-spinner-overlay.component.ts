import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-spinner-overlay',
  templateUrl: './mat-spinner-overlay.component.html',
  styleUrls: ['./mat-spinner-overlay.component.scss']
})

/*
spinner to be used as loading overlay as required
*/

export class MatSpinnerOverlayComponent implements OnInit {

  constructor() { }

  @Input() value : number = 100;
  @Input() diameter: number = 100;
  @Input() mode : string ="indeterminate";
  @Input() strokeWidth : number = 10;
  @Input() overlay: boolean = false;
  @Input() color: string = "primary";

  ngOnInit() {

  }

}