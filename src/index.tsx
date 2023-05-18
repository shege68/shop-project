import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div>
            <h1>Hello App component</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
                ab non, nulla ad possimus nihil eveniet delectus ratione fugiat
                nam reiciendis a minus eius doloribus porro voluptatem
                voluptatum corporis voluptates.
            </p>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Beatae, in ipsum impedit totam iure nobis fugiat! Modi, hic. At
                reiciendis voluptas natus aut eveniet id odio debitis vitae.
                Dolore, nulla.
            </p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
