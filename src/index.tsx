import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
const title = React.createElement('h1', { id: 'title' }, 'Hello React')
console.log('🚀 ~ file: index.tsx:6 ~ title:', title)

// JSX
const app = (
    <div>
        <h1 id="text">Hello App</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            possimus ratione nihil eos ipsam! Officia delectus unde corporis
            tempora adipisci fuga est aspernatur quia porro accusantium odio,
            aperiam ipsum velit!
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
