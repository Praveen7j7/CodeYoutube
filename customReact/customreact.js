function customRender(reactElement, container)
{
    /*
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    
    container.appendChild(domElement)
    */   

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}

//It is the Job of the bundler to reorganize the code at the 
//back of the implementation of the JSX code, so all the babel or vite are nothing but bundler who 
// organize things at the background like below so that it can be processed 
//below syntax is called as tree syntax which react can easily understand so from html to tree format conversion happens via the parsing of the entire program and for this 
// babel and vite are the parsers who are implanted for specific purpose
const reactElement = {
    type:'a',
    props:{
        href:'https://google,com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
const mainContainer=document.querySelector('#root');
customRender(reactElement, mainContainer)