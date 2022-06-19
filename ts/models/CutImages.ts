class CutImages{
    private toggle:boolean=false;
    private mouseStartY:string;//Y relativo
    private startX:string;//X relativo
    private ab_endX:number;//X 
    private selection:HTMLElement;
    private el_image:HTMLDivElement
    private image_data:DOMRect;
    constructor(el:HTMLDivElement){
        this.el_image=el;
        this.el_image.style.position='relative';
        this.el_image.style.width='100%';
        this.selection = this.addEl({place:el,tag:'div',attrs:[
            {
                style:`
                position:absolute;
                border-style:dashed;
                border-color:red;
                width:100px;
                height:100px;
                top:0px;
                left:0px;
                `
            }
        ]});
        this.ab_endX=0;
        this.image_data = el.getBoundingClientRect();
        this.startX='el.clientX';
        this.mouseStartY='el.clientY';
    }
    public mousedown(e:MouseEvent){
        
    }
    public mouseover(e:MouseEvent){
        (<HTMLDivElement>e.target).style.cursor="crosshair"
    }
    public mousemove(e:MouseEvent){
        if(this.toggle){
            const {clientX,clientY}=e
            this.ab_endX=clientX;
            ab_endY=clientY;
            
            (<HTMLDivElement>e.target).style.visibility="visible";
            (<HTMLDivElement>e.target).style.top=this.mouseStartY+'px';
            (<HTMLDivElement>e.target).style.left=this.startX+"px";
            (<HTMLDivElement>e.target).style.width=(this.ab_endX-parseInt(this.startX))+"px";
            (<HTMLDivElement>e.target).style.height=(this.ab_endY-this.mouseStartY)+"px";
        }
    }
    public mouseup(e:any){
            this.toggle=false
            relativeEndX = e.layerX;
            relativeEndY = e.layerY;
            (<HTMLDivElement>e.target).style.visibility="hidden";
            //crop()
    }
    
    private addEl(obj:CreateElementObject):HTMLElement{
        let tag:HTMLElement;
            tag = document.createElement(obj.tag);
            if(obj.attrs?.length){
                let ob:any
                for(ob of obj.attrs){
                    let key:any
                    for(key in ob){
                        let att = document.createAttribute(key)
                        att.value= ob[key];
                        tag.setAttributeNode(att)
                    }
                }
            }
            obj.insertTag?tag.innerHTML=obj.insertTag:0
            obj.place.appendChild(tag);
        
        return tag;
    }
    
}
