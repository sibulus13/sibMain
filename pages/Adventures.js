// import TableElement from '@components/TableElement'

// import profilePic from '../public/me.jpg'
import Link from 'next/link'
import Image from 'next/image'
import Router from 'next/router'

let ele = {
  imgs: [],
  title: 'title'
}

let data = [ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele, ele,]
let folders = ['adventure1', 'adventure2', 'adventure3']

export default function Adventures() {
  return (
    <div className="container-table ">
      <h1>Adventure Pg</h1>
      <table>
        {folders.map((ele, id) => {
          return (
            <Link
              // href={`/post/${encodeURIComponent(ele)}`}
              href={{
                pathname: `/Post`,
                query: { Post: ele },
              }}
            >
              <td className='table-cell'>
                <div className='profile_pic_container'>
                  <Image
                    src={`/adventures/${ele}/1.jpg`}
                    className='profile-pic'
                    layout='intrinsic'
                    width={500}
                    height={500}
                  />
                </div>
                <caption>title {id}</caption>
              </td>
            </Link>
          )
        })}
      </table>
    </div>)
}

// export async function getStaticProps() {

// }