import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[ppkmnBorderCard]'
})
export class BorderCardDirective {

  constructor(private el: ElementRef) { 
    this.setBorder('#f5f5f5');
    this.setHeight(180);
  }

  setHeight(height: number): void {
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorder(color: string): void {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }

}
