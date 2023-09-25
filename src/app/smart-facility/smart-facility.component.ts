import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-smart-facility',
  templateUrl: './smart-facility.component.html',
  styleUrls: ['./smart-facility.component.css']
})
export class SmartFacilityComponent implements OnInit {

  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void{
    this.viewPortScroller.scrollToAnchor(elementId);
  }

}
