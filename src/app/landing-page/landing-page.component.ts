import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
 
  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void{
    this.viewPortScroller.scrollToAnchor(elementId);
  }

}
