import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public screenWidth: any;
  public checkMobile: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  openMobileMenu() {
    if (this.screenWidth >= 1024) {
      return 'lg:hidden';
    } else {
      return '';
    }
  }

  openMenu() {
    this.checkMobile = true;
  }

  closeMenu() {
    this.checkMobile = false;
  }

  openMenuMobile() {
    if (this.checkMobile == true) {
      return '';
    } else {
      return 'lg:hidden';
    }
  }

  closeMenuMobile() {
    if (this.checkMobile == false || this.screenWidth >= 1024) {
      return 'hidden';
    } else {
      return '';
    }
  }
}
