// 根据react的方法拆分我们之前写的一些代码

type ReactNodeType = {
    type: string;
    props: {
        [key: string]: any,
        children: ReactNodeType[]
    },
}

function createTextNode(text:string): ReactNodeType {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text, 
            children: []
        },
    }
}

function createElement(type:string, props:any, ...children:any[]): ReactNodeType {
    return {
        type,
        props: {
            ...props,
            children: children.map(child => {
                return typeof child === 'string' ?  createTextNode(child) :child
            })
        },
    }
}

function render(el:ReactNodeType, container: HTMLElement) {
    const dom = el.type === 'TEXT_ELEMENT'? document.createTextNode('') : document.createElement(el.type);

    Object.keys(el.props).forEach(key => {
       if (key !== 'children') {
        dom[key] = el.props[key]
       }
    })

    const children = el.props.children;
    children.forEach(child => {
        render(child, dom)
    })

    container.append(dom)
}

const React = {
    render,
    createElement
}

export default React;