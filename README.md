# Ng-timeline-horizontal-slider

This library is made with angular version 14.2.0.

## Getting started

1. run `npm install --save angular-mgl-timeline`
2. in your app module:

`...
import {NgTimelineModule} from "ng-timeline.module";

@NgModule({
...
imports: [
...
BrowserModule,
NgTimelineModule
]
})
export class AppModule { }`

## Usage

#### Minimal usage

##### `<ng-horizontal-timeline-slider [status]="status"></ng-horizontal-timeline-slider>`

## Inputs
| Property |      Type      |   default | impact                                 |
|----------|:--------------:|----------:|----------------------------------------|
| status   |    string[]    | undefined | this will be items of the timeline     |
| height   |     number     |       500 | height of the timeline                 |
| size     | 'sm'/'md'/'lg' |        lg | size of the timeline                   |
| topBottomPosition     |     number     |      -150 | upper and lower position of the status |
| leftPosition     |     number     |       -40 | left position of the status            |
| widthOfPosition     |     number     |        50 | width of the status                    |



## License
MIT License (c) Markus Glutting
