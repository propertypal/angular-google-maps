import { Directive, EventEmitter, OnInit, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from './../services/google-maps-api-wrapper';

@Directive({
  selector: 'agm-child'
})
export class AgmChild implements OnInit {
  @Output() onMapLoad: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(public gMaps: GoogleMapsAPIWrapper) {}

  ngOnInit() {
    this.gMaps.getNativeMap().then((map) => {
      this.onMapLoad.emit(map);
    });
  }
}
