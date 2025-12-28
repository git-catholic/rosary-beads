import { AfterViewInit, Directive, ElementRef, EventEmitter, inject, Input, NgZone, OnDestroy, OnInit, Output } from '@angular/core';

/**
 * Derived from https://learnwithawais.medium.com/watch-me-an-angular-directive-that-detects-visibility-like-a-pro-d2a4ce4af84b
 */
@Directive({
  selector: '[appVisibilityCheck]'
})
export class VisibilityCheckDirective implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  threshold: number;

  @Output()
  completelyVisibleEvent = new EventEmitter<boolean>();
  
  // @Inject(ElementRef)
  // private readonly elementRef: ElementRef;

  // private readonly elementRef = inject(ElementRef);

  private observer!: IntersectionObserver;
  
  constructor(private readonly elementRef: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    if (this.threshold === undefined) {
      this.threshold = 1;
    }
    console.log(`threshold: ${this.threshold}`);
  }

  ngAfterViewInit(): void {
    const container = this.elementRef.nativeElement.parentElement;
    console.log(`ngAfterViewInit - nativeElement: ${this.elementRef?.nativeElement?.id}`);
    console.log(`ngAfterViewInit - parentElement: ${this.elementRef?.nativeElement?.parentElement?.id}`);
    console.log(`------------------------------------------------------`);
    this.observer = new IntersectionObserver(
      (entries) => {
        console.log(`+++ processing event emit... ${entries?.length}`);
        for (const entry of entries) {
          const targetRect = entry?.target?.getBoundingClientRect();
          const completelyVisible = targetRect?.top >= 0 && targetRect?.left >= 0
            && targetRect?.bottom <= window.innerHeight && targetRect?.right <= window.innerWidth;
          // console.log(`info: (${window?.innerWidth}, ${window?.innerHeight}, ${JSON.stringify(entry?.target?.getBoundingClientRect())}, intersect? ${entry?.isIntersecting}`);
          // console.log(`target: ${target?.id} - ${target?.clientTop}`);
          console.log(`emit - completely visible? ${completelyVisible}`);
          this.completelyVisibleEvent.emit(completelyVisible);
        }
      },
      {
        root: container,
        threshold: this.threshold
      }
    );
    console.log(`ngAfterViewInit - before observe`);
    this.observer.observe(this.elementRef.nativeElement);
    console.log(`ngAfterViewInit - after observe`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy - before disconnect`);
    this.observer?.disconnect();
    console.log(`ngOnDestroy - after disconnect`);
  }

}
