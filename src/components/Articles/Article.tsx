import './article.scss'
type Props = {
    id: number
    theme: string
    title: string
    author: string
    date: string
    image: string
    text1: string
    text2: string
    text3: string
    textTitle: string
}
const Article = ({
    id,
    theme,
    title,
    author,
    date,
    image,
    text1,
    text2,
    text3,
    textTitle,
}: Props) => {
    return (
        <div className="article">
            <div className="article-theme">{theme}</div>
            <h2 className="article-title">{title}</h2>
            <div className="article-author-date">
                written by {author} | {date}
            </div>
            <img src={image} alt={title} />
            <div className="article-text container-md">
                <p>{text1}</p>
                <p>{text2}</p>
                <h3 className="text-title">{textTitle}</h3>
                <p>{text3}</p>
            </div>
        </div>
    )
}
export default Article
