import { Directive, EventEmitter, Output } from '@angular/core';
import { GoogleMapsAPIWrapper } from './../services/google-maps-api-wrapper';
var AgmChild = (function () {
    function AgmChild(gMaps) {
        this.gMaps = gMaps;
        this.onMapLoad = new EventEmitter();
    }
    AgmChild.prototype.ngOnInit = function () {
        var _this = this;
        this.gMaps.getNativeMap().then(function (map) {
            _this.onMapLoad.emit(map);
        });
    };
    return AgmChild;
}());
export { AgmChild };
AgmChild.decorators = [
    { type: Directive, args: [{
                selector: 'agm-child'
            },] },
];
/** @nocollapse */
AgmChild.ctorParameters = function () { return [
    { type: GoogleMapsAPIWrapper, },
]; };
AgmChild.propDecorators = {
    'onMapLoad': [{ type: Output },],
};
//# sourceMappingURL=agm-child.js.map