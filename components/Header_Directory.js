import Link from 'next/link'

export default function Header_Directory() {
    return (
        <div
            className='links'>
            <h5>
                <Link href="/About-me">
                    <a>About me</a>
                </Link>
            </h5>
            <h5>
                <Link href="/About-me">
                    <a>Adventures</a>
                </Link>
            </h5>
            <h5>
                <Link href="/About-me">
                    <a>Accomplishments</a>
                </Link>
            </h5>
        </div>
    )
}