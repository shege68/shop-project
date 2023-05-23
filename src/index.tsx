import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

interface TitleProps {
    title: string
}

const Title = (props: TitleProps) => {
    return <h1>Hello {props.title} component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                ipsum doloribus error alias magni, sint expedita non soluta
                minus laborum harum eligendi ea optio repudiandae autem nulla!
                Nulla, corrupti nam!
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                iste, facilis voluptatum ducimus tempore, sequi nostrum quos,
                numquam hic adipisci deserunt nobis nihil libero ipsam molestias
                labore nam quae iusto?
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" />
            <Content />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
