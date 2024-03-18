import {Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective implements OnInit{

  @Input() appHover:string = 'red';

  constructor(private element:ElementRef, /*@Inject(DOCUMENT) private document:Document*/ private renderer:Renderer2) {
    console.log(this.element.nativeElement);
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.appHover);
  }

  @HostListener('mouseenter') onMouseEnter(){
      this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green');
  }
  @HostListener('mouseleave') onMouseLeave(){
      this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white');
  }
}
