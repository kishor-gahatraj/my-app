import { Component, ElementRef, Inject, PLATFORM_ID,AfterViewInit  } from '@angular/core';
import Swiper from 'swiper';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-servicescomp',
  standalone: true,
  imports: [],
  templateUrl: './servicescomp.component.html',
  styleUrl: './servicescomp.component.css'
})
export class ServicescompComponent implements AfterViewInit {
  constructor(private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    debugger; // Debugger statement for inspection

    if (isPlatformBrowser(this.platformId)) {
      const swiperContainer = this.el.nativeElement.querySelector('.swiper-container') as HTMLElement;
      if (swiperContainer) {
        new Swiper(swiperContainer, {
          loop: true,
          speed: 600,
          autoplay: {
            delay: 5000,
          },
          slidesPerView: 'auto',
          pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 1,
            }
          }
        });
      }
    }
  }
}