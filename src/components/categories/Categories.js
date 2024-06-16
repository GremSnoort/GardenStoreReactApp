import { useState, useEffect } from 'react'

const Link = (children, href_in, class_id) => {
    return (
      <a href={href_in} className={class_id}>
        {children}
      </a>
    )
}
  
const Span = (class_id, text, key_in) => {
    return <span className={class_id} key={key_in}>{text}</span>
}
  
const Img = (class_id, src_in, alt_in, key_in) => {
    return <img className={class_id} src={src_in} alt={alt_in} key={key_in} />
}

function CategoriesVisualize({data, endpoint}) {
    var arr = []
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        arr.push(
            Link(
                [
                    Img('category__img', `${endpoint.concat('', data[i].image)}`, 'alt', `${i + 1}`),
                    Span('category__text', `${data[i].title}`, `${(i + 1) * 2}`)
                ],
                `/categories/${data[i].id}`, 'category'
            ) )
    }
    return (
        <div className="fx category-wrap">{arr}</div>
    )
}

export default function Categories({endpoint, target}) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(endpoint.concat('', target))
            .then(res => res.json())
            .then(data => setData(data))
    });

    let i = 0

    return (
        <main>
        <div className="container">
            <h1 className="h2">Categories</h1>
            <div className="container-drawable">
                <div className="fx category-wrap">
                    {data && data.map((element, index) => {
                        let ret = (<>{Link(
                            [
                                Img('category__img', `${endpoint.concat('', element.image)}`, 'alt', `${i + 1}`),
                                Span('category__text', `${element.title}`, `${(i + 1) * 2}`)
                            ],
                            `/categories/${element.id}`, 'category'
                        )}</>);
                        i++;
                        return ret;
                    })}
                </div>
            </div>
        </div>
        </main>
    )
}
