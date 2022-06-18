//import {InputFile} from './models/InputFiles'

document.addEventListener('DOMContentLoaded',function(){

    let file_image:any = document.querySelector('#file-image');
    let imagem_view:any = document.querySelector('#imagem-view');
    let click_search:any = document.querySelector('#click-search');
    let change_file:any = document.querySelector('#change-file');
    function search(e:Event):void{
        file_image.click();
    }
    function changeFile(e:Event):void{
        const input = new InputFile(<HTMLInputElement>e.target);
        const read = new FileReader();
        read.readAsDataURL(input.getFiles()[0])
        read.onload=e=>{
            imagem_view.src= read.result
        } 
    }


    click_search.addEventListener('click',search);
    change_file.addEventListener('change',changeFile);
})
