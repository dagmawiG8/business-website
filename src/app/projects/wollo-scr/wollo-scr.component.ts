import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';
declare var $: any; 

@Component({
  selector: 'app-wollo-scr',
  templateUrl: './wollo-scr.component.html',
  styleUrls: ['./wollo-scr.component.css']
})
export class WolloSCRComponent implements OnInit {
  constructor(private viewPortScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  public onClick(elementId: string): void{
    this.viewPortScroller.scrollToAnchor(elementId);
  }

  @ViewChild('carousel') carousel: ElementRef;

  prevSlide(): void {
    const carouselElement = this.carousel.nativeElement;
    $(carouselElement).carousel('prev');
  }

  nextSlide(): void {
    const carouselElement = this.carousel.nativeElement;
    $(carouselElement).carousel('next');
  }
}
