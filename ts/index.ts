//import {InputFile} from './models/InputFiles'

document.addEventListener('DOMContentLoaded',function(){

    let file_image:HTMLImageElement = document.querySelector('#file-image') as HTMLImageElement;
    let imagem_view:HTMLImageElement = document.querySelector('#imagem-view')as HTMLImageElement;
    let click_search:HTMLButtonElement = document.querySelector('#click-search')as HTMLButtonElement;
    function search(e:Event):void{
        file_image.click();
    }
    function changeFile(e:Event):void{
        const input = new InputFile(<HTMLInputElement>e.target);
        const read = new FileReader();
        read.readAsDataURL(input.getFiles()[0])
        read.onload=e=>{
            imagem_view.src= <string>read.result
        } 
    }


    click_search.addEventListener('click',search);
    file_image.addEventListener('change',changeFile);
})
