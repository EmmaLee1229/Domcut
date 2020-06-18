window.dom={
    find(selector,scope){
        return (scope|| document).querySelectorAll(selector)
    },
    style(node,name,value){
        if(arguments.length ===3){
            //(node,'color','red')
            node.style[name] = value
        }else if(arguments.length ===2){
            //(node,'color')
            if(typeof node === 'string'){
                return node.style[name]
            }else if( name instanceof Object){
            //(node,{border:'1px solid red',color:'red'})
            for(let key in name){
                node.style[key] = name[key]
            }
            }
        }
    },
    each(nodeList,fn){
        for(let j = 0;j<nodeList.length;j++){
        //若nodeList的子节点的长度为空则表示其没有子节点，打出这个节点，若不为空则遍历子节点
            if(nodeList[j].children.length!== 0){
                let x = nodeList[j].children
                for(let i = 0;i< x.length;i++){
                    fn.call(null,x[i])
                }
            }else{
                fn.call(null,nodeList[j])
            }
        }
        
        
    }
}