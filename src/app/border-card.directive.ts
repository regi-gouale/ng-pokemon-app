import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[ppkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setBorder('#009688');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number): void {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string): void {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
