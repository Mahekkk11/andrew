import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightCs]'
})
export class HighlightCsDirective implements OnInit {

  @Input('appHighlightCs') department: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (this.department.toLowerCase().includes('computer')) {
      this.el.nativeElement.style.color = 'blue';
      this.el.nativeElement.style.fontWeight = 'bold';
    }
  }
}
