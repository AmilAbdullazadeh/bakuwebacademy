import React, {useState, useEffect} from 'react';
import sanityClient from "../client";
import image from '../assets/bg-img.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
    return builder.image(source)
}

export default function About(props) {

    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            slug,
            "authorImage": image.asset->url
        }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.error)
    }, [author])

    if (!author) return <div>Loading...</div>

    return (
        <div>
            <main className="main-about">
                <img src={image} />
                <div>
                    <section className="section-about">
                        <img src={urlFor(author.authorImage).url()} />
                        <div>
                            <h1>
                                Hey there. Our us "{ }"
                                <span>{author.name}</span>
                            </h1>
                            <div>
                                <BlockContent blocks={author.bio} projectId='nhn0majf' dataset='production' />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}