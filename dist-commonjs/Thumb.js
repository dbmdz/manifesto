"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LanguageMap_1 = require("./LanguageMap");
// todo: deprecate
// this is used by Sequence.getThumbs
var Thumb = /** @class */ (function () {
    function Thumb(width, canvas) {
        this.data = canvas;
        this.index = canvas.index;
        this.width = width;
        var heightRatio = canvas.getHeight() / canvas.getWidth();
        if (heightRatio) {
            this.height = Math.floor(this.width * heightRatio);
        }
        else {
            this.height = width;
        }
        this.uri = canvas.getCanonicalImageUri(width);
        this.label = LanguageMap_1.LanguageMap.getValue(canvas.getLabel()); // todo: pass locale?
    }
    return Thumb;
}());
exports.Thumb = Thumb;
//# sourceMappingURL=Thumb.js.map