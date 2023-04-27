import React, { useEffect, useState } from 'react';

function Articles({ dataArticle }) {
    const [articles, setArticles] = useState(dataArticle);
    const [orderBy, setOrderBy] = useState('top')
    const [sortOrder, setSortOrder] = useState([]);

    const sortArticles = (criterion) => {
        setOrderBy(criterion)
        let sortedArticles = [];

        if (criterion === 'discounted') {
            sortedArticles = articles.filter(article => article.specials);
        } else if (criterion === 'top') {
            sortedArticles = articles.filter(article => article.upvotes > 0).sort((a, b) => b.upvotes - a.upvotes);
        } else {
            sortedArticles = articles.sort((a, b) => b.upvotes - a.upvotes);
        }

        setSortOrder(sortedArticles);
    }

    useEffect(() => {
        if (dataArticle) {
            const sortedArticles = articles.sort((a, b) => b.upvotes - a.upvotes);
            setSortOrder(sortedArticles);
        }
    }, [dataArticle]);

    if (!dataArticle) return <div id="slide" className="card text-center card2">No hay datos</div>;

    return (
        <div>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Ordenar por</label>
                <button data-testid="most-upvoted-link" onClick={() => sortArticles('top')} className={orderBy === 'top' ? 'small btn-disable' : "small"}>Más votados</button>
                <button data-testid="most-recent-link" onClick={() => sortArticles('discounted')} className={orderBy === 'discounted' ? 'small btn-disable' : "small"}>Con descuento</button>
            </div>

            <div className="card w-50 mx-auto">
                <table>
                    <thead>
                        <tr>
                            <th> Artículo </th>
                            <th> Votos a favor</th>
                            <th> Fecha </th>
                        </tr>
                    </thead>
                    {
                        sortOrder && sortOrder.map(({ date, specials, title, upvotes }, index) => {
                            return (
                                <tbody key={index}>
                                    <tr data-testid="article" key="article-index">
                                        <td data-testid="article-title">{title}</td>
                                        <td data-testid="article-upvotes">{upvotes}</td>
                                        <td data-testid="article-date">{date}</td>
                                    </tr>
                                </tbody>)
                        })
                    }
                </table>

            </div>
        </div>
    );
}

export default Articles;
