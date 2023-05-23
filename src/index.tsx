import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import { Content } from './Content'

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={2} />
            <Content
                text1={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quo fugiat maiores quod aliquid nam facilis minima amet dignissimos cupiditate soluta unde atque, ducimus eum illo consequuntur, nesciunt nobis porro.'
                }
                text2={
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium harum a, eaque non, inventore soluta laborum in eveniet quaerat iste aspernatur, deserunt error dolor ab nulla ipsum explicabo quo?'
                }
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
