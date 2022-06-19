"use strict";
var CutImages = /** @class */ (function () {
    function CutImages(el) {
        this.toggle = false;
        this.el_image = el;
        this.el_image.style.position = 'relative';
        this.el_image.style.width = '100%';
        this.selection = this.addEl({ place: el, tag: 'div', attrs: [
                {
                    style: "\n                position:absolute;\n                border-style:dashed;\n                border-color:red;\n                width:100px;\n                height:100px;\n                top:0px;\n                left:0px;\n                visibility:hidden\n                "
                }
            ] });
        this.ab_endX = 0;
        this.ab_endY = 0;
        this.image_data = el.getBoundingClientRect();
        this.startX = 'el.clientX';
        this.mouseStartY = 'el.clientY';
        //Events
        this.el_image.addEventListener('mousedown', this.mousedown);
        this.el_image.addEventListener('mouseover', this.mouseover);
        this.el_image.addEventListener('mousemove', this.mousemove);
        this.el_image.addEventListener('mouseup', this.mouseup);
    }
    CutImages.prototype.mousedown = function (e) {
        this.toggle = true;
        console.log("down");
    };
    CutImages.prototype.mouseover = function (e) {
        e.target.style.cursor = "crosshair";
    };
    CutImages.prototype.mousemove = function (e) {
        if (this.toggle) {
            var clientX = e.clientX, clientY = e.clientY;
            this.ab_endX = clientX;
            this.ab_endY = clientY;
            this.selection.hidden = false;
            this.selection.style.top = this.mouseStartY + 'px';
            this.selection.style.left = this.startX + "px";
            this.selection.style.width = (this.ab_endX - parseInt(this.startX)) + "px";
            this.selection.style.height = (this.ab_endY - parseInt(this.mouseStartY)) + "px";
        }
    };
    CutImages.prototype.mouseup = function (e) {
        console.log(e.target);
        this.toggle = false;
        this.selection.style.visibility = 'visible';
    };
    CutImages.prototype.addEl = function (obj) {
        var _a;
        var tag;
        tag = document.createElement(obj.tag);
        if ((_a = obj.attrs) === null || _a === void 0 ? void 0 : _a.length) {
            var ob = void 0;
            for (var _i = 0, _b = obj.attrs; _i < _b.length; _i++) {
                ob = _b[_i];
                var key = void 0;
                for (key in ob) {
                    var att = document.createAttribute(key);
                    att.value = ob[key];
                    tag.setAttributeNode(att);
                }
            }
        }
        obj.insertTag ? tag.innerHTML = obj.insertTag : 0;
        obj.place.appendChild(tag);
        return tag;
    };
    return CutImages;
}());
