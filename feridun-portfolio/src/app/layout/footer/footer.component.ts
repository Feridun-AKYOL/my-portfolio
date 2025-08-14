import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private lastScrollY = 0;
  isHidden = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const currentY = window.scrollY;
    this.isHidden = currentY > this.lastScrollY;
    this.lastScrollY = currentY;
  }
}