"use strict";
var InputFile = /** @class */ (function () {
    function InputFile(file) {
        this.files = file.files;
    }
    InputFile.prototype.getFiles = function () {
        return this.files;
    };
    return InputFile;
}());
