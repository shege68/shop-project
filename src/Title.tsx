type TitleProps = {
    title: string
    num?: number
}

const Title = ({ title, num = 5 }: TitleProps) => {
    return (
        <h1>
            Hello {title} {num}
        </h1>
    )
}

export default Title
