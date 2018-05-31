import {Directive, ElementRef, Renderer2, HostListener, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appBold]',
})
export class BoldDirective {

  @Input() size = 600;
  @Output() public _onSize = new EventEmitter();
  constructor(private element: ElementRef, private renderer: Renderer2) {

    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('bold');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal');
    this._onSize.emit(this.size);
  }

  private setFontWeight(val: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', this.size);
  }


}
