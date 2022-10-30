import { NgModule } from '@angular/core';
import { NgTimelineComponent } from './ng-timeline.component';
import {NgClass, NgForOf} from "@angular/common";



@NgModule({
  declarations: [
    NgTimelineComponent
  ],
  imports: [
    NgClass,
    NgForOf
  ],
  exports: [
    NgTimelineComponent
  ]
})
export class NgTimelineModule { }
