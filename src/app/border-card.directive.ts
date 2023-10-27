import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultHeight: number = 180;
  private defaultColor: string = '#3498db';

  constructor(private el: ElementRef) {
    this.setHeight(this.defaultHeight);
  }
  @Input('pkmnBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
    this.setBorder(this.initialColor);
  }
  setWidth(width: number) {
    this.el.nativeElement.style.width = `${width}px`;
  }
  setBorder(color: string) {
    this.el.nativeElement.style.border = `4px solid ${color}`;
  }
}
