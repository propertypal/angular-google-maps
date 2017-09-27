import { EventEmitter, OnInit } from '@angular/core';
import { GoogleMapsAPIWrapper } from './../services/google-maps-api-wrapper';
export declare class AgmChild implements OnInit {
    gMaps: GoogleMapsAPIWrapper;
    onMapLoad: EventEmitter<{}>;
    constructor(gMaps: GoogleMapsAPIWrapper);
    ngOnInit(): void;
}
