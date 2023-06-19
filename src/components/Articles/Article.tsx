import { useState } from 'react'
import './article.scss'
type Props = {
    id: number
    theme: string
    title: string
    author: string
    date: string
    image: string
    text: string
}
const Article = ({ id, theme, title, author, date, image, text }: Props) => {
    return (
        <div className="article">
            <div className="article-theme">{theme}</div>
            <h2 className="article-title">{title}</h2>
            <div className="article-author-date">
                written by {author} | {date}
            </div>
            <img src={image} alt={title} />
            <div className="article-text container-md">{text}</div>
        </div>
    )
}
export default Article
