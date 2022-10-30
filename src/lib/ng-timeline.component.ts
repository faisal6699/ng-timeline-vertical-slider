import {Component, Input, OnInit} from '@angular/core';

type Direction = 'next' | 'prev';

@Component({
  selector: 'ng-horizontal-timeline-slider',
  templateUrl: './ng-timeline.component.html',
  styleUrls: ['./ng-timeline.component.scss']
})
export class NgTimelineComponent implements OnInit {
  @Input() status: string[] | undefined;
  @Input() height: number = 500;
  @Input() size: 'sm' | 'md' | 'lg' = 'lg';
  @Input() topBottomPosition: number = -150;
  @Input() leftPosition: number = -40;
  @Input() widthOfPosition: number = 50;
  translate: number = 30;
  prevInactive: boolean = true;
  nextInactive: boolean | undefined;
  totalWidth: number = 0;
  constructor() { }

  ngOnInit(): void {}

  getLeftValue(index: number) {
    if(index === 0) this.totalWidth = -(this.leftPosition);
    else this.totalWidth = index * 180 - this.leftPosition;
    return `${this.totalWidth}px`;
  }

  setTimelineStyle() {
    let width: number= 400;
    if(this.size === 'sm') {
      width = 480;
    }else if(this.size === 'md') {
      width = 820
    }else {
      width = 1200
    }
    return `height: ${this.height}px; max-width: ${width}px`
  }

  setPosition(i: number) {
    console.log(i)
    if(i % 2 === 0) return `top: ${this.topBottomPosition}px; left: ${this.leftPosition}px; width: ${this.widthOfPosition}px`;
    return `bottom: ${this.topBottomPosition}px; left: ${this.leftPosition}px; width: ${this.widthOfPosition}px`
  }

  move(direction: Direction) {
    const containerWidth = document.getElementById('timeline')?.offsetWidth || 0;
    let tran = this.translate;
    if(direction) {
      tran= (direction === 'next') ? tran - containerWidth : tran + containerWidth;
    }
    if(tran> 30 ) tran= 0;
    this.nextInactive = -tran> this.totalWidth;
    this.prevInactive = tran=== 0;
    const line: any = document.getElementById("line");
    if((direction === 'next' && !this.nextInactive) || (direction === 'prev' && !this.prevInactive)) {
      this.translate = tran;
      line.style.transform = `translateX(${this.translate}px)`;
    }
  }
}
