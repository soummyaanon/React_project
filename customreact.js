function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childeren
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */
const domElemnet = document.createElement (reactElement.type);
domElemnet.innerHTML = reactElement.childeren;
for (const prop in reactElement.props) {
    if (prop === 'children') continue;
    domElemnet.setAttribute(prop, reactElement.props[prop]);
}
container.appendChild(domElemnet);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank',
    }, 
    childeren: 'Click me'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
