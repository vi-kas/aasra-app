import { Component, Inject } from '@angular/core';
import { JQ_TOKEN } from '../services/jquery.service';

@Component({
  selector: 'header',
  templateUrl: './header.components.html',
  styles: [
    `
      .navbar-nav {
        margin-left: auto;
        margin-right: 11%;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
      }
      .navItemText {
        color: #ffffff;
        font-family: 'Gotham';
        font-size: 1.25em;
        font-weight: 500;
        font-stretch: semi-condensed;
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: box-shadow, transform;
        transition-property: box-shadow, transform;
      }
      .navItemText:hover,
      .navItemText:active,
      .navItemText:focus {
        color: #e81a5b;
        box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
      .nav-link-item {
        margin-left: 1em;
      }
      .sticky {
        overflow: hidden;
        background-color: #e81a5b;
        background-size: 20px 20px;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
      }
      nav.navbar {
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-box-shadow: 0 8px 6px -6px gray;
        -moz-box-shadow: 0 8px 6px -6px gray;
        box-shadow: 0 8px 6px -6px gray;
      }
      nav.navbar.shrink {
        min-height: 35px;
        height: 6.5%;
      }
      #headerImgDiv {
        left: auto;
        margin-left: 10%;
      }
    `,
  ],
})
export class HeaderComponent {
  constructor(@Inject(JQ_TOKEN) private $: any) {}

  ngOnInit(): void {
    this.$(window).scroll(function () {
      if (this.$(document).scrollTop() > 50) {
        this.$('nav').addClass('shrink');
        this.$('#headerImg').css('height', '50px');
      } else {
        this.$('nav').removeClass('shrink');
        this.$('#headerImg').css('height', '60px');
      }
    });
  }
}
