class CutImages{
    private toggle:boolean;
    private mouseStartY:string;//Y relativo
    private startX:string;//X relativo
    private ab_endX:number;//X 
    private ab_endY:number;//X 
    private selection:HTMLElement;
    private el_image:HTMLDivElement
    private image_data:DOMRect;
    constructor(el:HTMLDivElement){
        this.toggle=false
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
                visibility:hidden
                `
            }
        ]});
        this.ab_endX=0;
        this.ab_endY=0;
        this.image_data = el.getBoundingClientRect();
        this.startX='el.clientX';
        this.mouseStartY='el.clientY';
        //Events
        this.el_image.addEventListener('mousedown',this.mousedown)
        this.el_image.addEventListener('mouseover',this.mouseover)
        this.el_image.addEventListener('mousemove',this.mousemove)
        this.el_image.addEventListener('mouseup',this.mouseup)
    }
    public mousedown(e:MouseEvent){
        this.toggle=true
        console.log("down")
    }
    public mouseover(e:MouseEvent){
        (<HTMLDivElement>e.target).style.cursor="crosshair"
    }
    public mousemove(e:MouseEvent){
        if(this.toggle){
            const {clientX,clientY}=e
            this.ab_endX=clientX;
            this.ab_endY=clientY;
            
           this.selection.hidden=false;
           this.selection.style.top=this.mouseStartY+'px';
           this.selection.style.left=this.startX+"px";
           this.selection.style.width=(this.ab_endX-parseInt(this.startX))+"px";
           this.selection.style.height=(this.ab_endY-parseInt(this.mouseStartY))+"px";
        }
    }
    public mouseup(e:any){
        console.log(e.target)
            this.toggle=false
            this.selection.style.visibility='visible';
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
