import Article from './Article'
import articleArray from 'utils/articleArray'
type Props = {}
const ArticlesList = (props: Props) => {
    return (
        <>
            <div className="container text-center">
                <div className="article-container">
                    {articleArray.map(
                        ({ id, theme, title, author, date, image, text }) => (
                            <div>
                                <Article
                                    id={id}
                                    theme={theme}
                                    title={title}
                                    author={author}
                                    date={date}
                                    image={image}
                                    text={text}
                                />
                            </div>
                        )
                    )}
                </div>
            </div>
        </>
    )
}

export default ArticlesList
