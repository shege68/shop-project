type ContentProps = {
    text1: string
    text2: string
}

const Content = ({ text1, text2 }: ContentProps) => {
    return (
        <>
            <p className="red">{text1}</p>
            <p>{text2}</p>
        </>
    )
}

export default Content
