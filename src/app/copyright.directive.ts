import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Directive({
  selector: '[appCopyright]',
  standalone: true
})
export class CopyrightDirective {

  constructor(el: ElementRef,renderer: Renderer2) {
    renderer.addClass(el.nativeElement,'copyright');
    renderer.setProperty(
      el.nativeElement,
      'textContent',
      `Copyright ${new Date().getFullYear()} All rights reserved`
    );
  }
}
