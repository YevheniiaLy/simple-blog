import Article from './Article'
import articleArray from 'utils/articleArray'
type Props = {}
const ArticlesList = (props: Props) => {
    return (
        <>
            <div className="container text-center">
                <div className="article-container">
                    {articleArray.map(
                        ({
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
                        }) => (
                            <div>
                                <Article
                                    id={id}
                                    theme={theme}
                                    title={title}
                                    author={author}
                                    date={date}
                                    image={image}
                                    text1={text1}
                                    text2={text2}
                                    text3={text3}
                                    textTitle={textTitle}
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
