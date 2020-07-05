class vue{
    constructor(option){
        this.option = option;
        this._data = this.option.data;
        this.el = document.querySelector(this.option.el);
        this.compileNode(this.el);
    }
    compileNode(el){
        let child = el.childNodes;
        [...child].forEach(node=>{
            if(node.nodeType == 3){   //文本
                let text = node.textContent;
                let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
                if(reg.test(text)){
                    let $1 = RegExp.$1;
                    this._data[$1] && (node.textContent = text.replace(reg,this._data[$1]))
                }
            }else if(node.nodeType == 1){    // 元素节点
                this.compileNode(node)
            }
        })
    }
}