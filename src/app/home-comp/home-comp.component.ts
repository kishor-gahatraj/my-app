import { Component, AfterViewInit, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// declare var Typed: any; // Declare Typed to avoid TypeScript errors
import Typed from 'typed.js';



@Component({
  selector: 'app-home-comp',
  standalone: true,
  imports: [],
  templateUrl: './home-comp.component.html',
  styleUrl: './home-comp.component.css'
})
export class HomeCompComponent implements AfterViewInit {

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const elementSelector = '.typed-example';
      const selectTyped = this.elementRef.nativeElement.querySelector(elementSelector);

      if (selectTyped) {
        let typed_strings = selectTyped.getAttribute('data-typed-items');

        if (typed_strings) {
          let typed_strings_array = typed_strings.split(',');
          new Typed(elementSelector, {
            strings: typed_strings_array,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
          });
        } else {
          console.error('data-typed-items attribute not found or empty');
        }
      } else {
        console.error('Element with selector .typed-example not found');
      }
    }
  }

}