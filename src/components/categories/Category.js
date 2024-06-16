import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { ProductVisualize } from '../products/Products'

export default function Category({endpoint}) {
    const dispatch = useDispatch()
    const {id} = useParams();
    const [data, setData] = useState(null);

    const url = endpoint.concat('', `/categories/${id}`)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setData(data))
    }, [id, url]);

    return (
        <main>
        <div className="container">
            <h1 className="h2">{data && data.category.title}</h1>
            <div className="container-drawable">
            <div className="fx-wrp item-wrap">
                {data && data.data && data.data.map((element, index) => {
                  return (<>
                    <ProductVisualize element={element} endpoint={endpoint} dispatch={dispatch}/>
                  </>)
                })}
            </div>
            </div>
        </div>
        </main>
    )
}
