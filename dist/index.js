"use strict";
//import {InputFile} from './models/InputFiles'
document.addEventListener('DOMContentLoaded', function () {
    var file_image = document.querySelector('#file-image');
    var imagem_view = document.querySelector('#imagem-view');
    var click_search = document.querySelector('#click-search');
    var change_file = document.querySelector('#change-file');
    function search(e) {
        file_image.click();
    }
    function changeFile(e) {
        var input = new InputFile(e.target);
        var read = new FileReader();
        read.readAsDataURL(input.getFiles()[0]);
        read.onload = function (e) {
            imagem_view.src = read.result;
        };
    }
    click_search.addEventListener('click', search);
    change_file.addEventListener('change', changeFile);
});
