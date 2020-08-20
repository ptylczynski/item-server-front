import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  @Input() public id: number;
  isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit(): void {
  }

}
