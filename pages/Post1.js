import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Post({ url: { query: { Post } } }) {
    const router = useRouter()
    console.log(router);
    console.log(Post)
    return (
        <div className="container-table ">
            <h1>Post Pg</h1>
        </div>)
}

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}