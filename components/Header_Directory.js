import Link from 'next/link'

export default function Header_Directory() {
    return (
        <div
            className='links'>
            <h2>
                <Link href="/About-me">
                    <a>About me</a>
                </Link>
            </h2>
            <h2>
                <Link href="/About-me">
                    <a>Adventure</a>
                </Link>
            </h2>
            <h2>
                <Link href="/About-me">
                    <a>Showcase</a>
                </Link>
            </h2>
        </div>
    )
}