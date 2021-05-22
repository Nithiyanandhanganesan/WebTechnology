"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, isSelected) {
        this.likeCount = likeCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onclick = function () {
        if (this.isSelected) {
            this.likeCount--;
        }
        else {
            this.likeCount++;
        }
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
