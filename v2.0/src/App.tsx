import React from './core/React';

// const App = React.createElement('div',{id:'app'}, 'hi','-','mini','-','react');

const App = <div>Hi-Mini-React</div>
console.log(App)

const AppFunc = function () {
    return <div id="func-app">
        Hi-Mini-React
        <div>111</div>
        <div>222</div>
    </div>
}
console.log(AppFunc)

export default  App;