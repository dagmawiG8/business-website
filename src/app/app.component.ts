import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Convergence';
  navbarfixed:boolean = false;

  constructor(private viewPortScroller: ViewportScroller) {}
  ngOnInit(): void {} 

  @HostListener('window:scroll',['$event']) onScroll() {
    if(window.scrollY > 100)
    {
      this.navbarfixed = true;
    }
    else
    {
      this.navbarfixed = false;
    }
  }

  public onClick(elementId: string): void{
    this.viewPortScroller.scrollToAnchor(elementId);
  }

}
