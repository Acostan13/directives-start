import { Directive, OnInit, ElementRef } from '@angular/core'

// Use this technique for adding selectors to dynamically created pages
@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green'
  }
}
