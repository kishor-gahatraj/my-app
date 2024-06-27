import { Component, OnInit ,Renderer2, ElementRef , HostListener,Inject, PLATFORM_ID } from '@angular/core';
import{HomeCompComponent} from '../home-comp/home-comp.component';
import { AboutcompComponent } from '../aboutcomp/aboutcomp.component';
import { ContactcompComponent } from '../contactcomp/contactcomp.component';
import { ServicescompComponent } from '../servicescomp/servicescomp.component';
import { ResumecompComponent } from '../resumecomp/resumecomp.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-horiznavbar',
  standalone: true,
  imports: [HomeCompComponent,AboutcompComponent,ContactcompComponent,ServicescompComponent,ResumecompComponent,],
  templateUrl: './horiznavbar.component.html',
  styleUrl: './horiznavbar.component.css'
})
export class HoriznavbarComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef,@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.setupHeaderToggle();
    this.setupNavLinks();
  }

  setupHeaderToggle(): void {
    const headerToggleBtn = this.el.nativeElement.querySelector('.header-toggle');

    if (headerToggleBtn) {
      this.renderer.listen(headerToggleBtn, 'click', () => {
        const header = this.el.nativeElement.querySelector('#header');
        if (header) {
          header.classList.toggle('header-show');
          headerToggleBtn.classList.toggle('bi-list');
          headerToggleBtn.classList.toggle('bi-x');
        }
      });
    }
  }

  setupNavLinks(): void {
    const navmenuLinks = this.el.nativeElement.querySelectorAll('#navmenu a');
  
    navmenuLinks.forEach((navmenu: HTMLElement) => {
      this.renderer.listen(navmenu, 'click', () => {
        const header = this.el.nativeElement.querySelector('#header');
        if (header && header.classList.contains('header-show')) {
          header.classList.remove('header-show');
          const headerToggleBtn = this.el.nativeElement.querySelector('.header-toggle');
          if (headerToggleBtn) {
            headerToggleBtn.classList.remove('bi-x');
            headerToggleBtn.classList.add('bi-list');
          }
        }
      });
    });
  }

  isActive(sectionId: string): boolean {
    if (!isPlatformBrowser(this.platformId)) {
      return false; // Handle non-browser platform (e.g., server-side rendering)
    }

    const section = this.el.nativeElement.querySelector(sectionId);
    if (section) {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || 0;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top + scrollPosition;
      const sectionBottom = sectionTop + sectionRect.height;
      const windowHeight = window.innerHeight;
  
      // Determine if section is fully or partially visible
      return (
        sectionTop <= scrollPosition + windowHeight && // Section top is within viewport bottom
        sectionBottom >= scrollPosition // Section bottom is below or at viewport top
      );
    }
  
    return false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      // Handle scroll event here
    }
  }
}