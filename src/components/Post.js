import React, {useState, useEffect} from 'react';
import sanityClient from "../client";
import {Link} from "react-router-dom";

export default function Post() {

    const [postData, setPostData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                asset->{
                    _id,
                    url
                },
                alt
              }
            }`)
            .then((data) => {
                setPostData(data)
            })
            .catch(console.error)
    }, [])

    return (
        <main className="main-post">
            <section className="section-post">
                <h1>Blog posts</h1>
                <h2>Welcome to our academy of blogs posts</h2>
                <div className="main-div-post">
                    {
                        postData && postData.map((post, idx) => (
                            <article key={idx}>
                                <Link to={`/post/${post.slug.current}`} key={post.slug.current}>
                                    <span className="span-post" key={idx}>
                                        <img style={{ width: '350px', height: '350px' }} className="img-post" src={post.mainImage.asset.url}
                                             alt={post.mainImage.alt}/>
                                        <span className="span2-post">
                                            <h3>{post.title}</h3>
                                        </span>
                                    </span>
                                </Link>
                            </article>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}