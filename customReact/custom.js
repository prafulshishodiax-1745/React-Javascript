function render(reactElement, maincontainer)
{
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children;
   for(const prop in reactElement.props)
   {
       domElement.setAttribute(prop, reactElement.props[prop]);
   }
   maincontainer.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href: 'https://www.google.com',
        target : "_blank"
    },
    children : "Click to visit google"
}
const container = document.getElementById('root');
render(reactElement, container)
