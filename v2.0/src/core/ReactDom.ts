import React from './React'
const ReactDOM = {
    createRoot(container:any) {
        return {
            render(App: ReactNodeType) {
                React.render(App, container)
            }
        }
    }
}

export default ReactDOM;