"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ManifestResource_1 = require("./ManifestResource");
var Utils_1 = require("./Utils");
var Service = /** @class */ (function (_super) {
    __extends(Service, _super);
    function Service(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    Service.prototype.getProfile = function () {
        var profile = this.getProperty('profile');
        if (!profile) {
            profile = this.getProperty('dcterms:conformsTo');
        }
        if (Array.isArray(profile)) {
            return profile[0];
        }
        return profile;
    };
    Service.prototype.getConfirmLabel = function () {
        return Utils_1.Utils.getLocalisedValue(this.getProperty('confirmLabel'), this.options.locale);
    };
    Service.prototype.getDescription = function () {
        return Utils_1.Utils.getLocalisedValue(this.getProperty('description'), this.options.locale);
    };
    Service.prototype.getFailureDescription = function () {
        return Utils_1.Utils.getLocalisedValue(this.getProperty('failureDescription'), this.options.locale);
    };
    Service.prototype.getFailureHeader = function () {
        return Utils_1.Utils.getLocalisedValue(this.getProperty('failureHeader'), this.options.locale);
    };
    Service.prototype.getHeader = function () {
        return Utils_1.Utils.getLocalisedValue(this.getProperty('header'), this.options.locale);
    };
    Service.prototype.getServiceLabel = function () {
        return Utils_1.Utils.getLocalisedValue(this.getProperty('label'), this.options.locale);
    };
    Service.prototype.getInfoUri = function () {
        var infoUri = this.id;
        if (!infoUri.endsWith('/')) {
            infoUri += '/';
        }
        infoUri += 'info.json';
        return infoUri;
    };
    return Service;
}(ManifestResource_1.ManifestResource));
exports.Service = Service;
//# sourceMappingURL=Service.js.map