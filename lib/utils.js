// const cors = require('cors');

// // FITBIT
// let encodedIDSecret = "MjNCMjRGOmI4MjcyNThhNmNiZWY2ZjgzNDUzNmU2NWYzNDQ2ZjE1"
// let url = "http://api.fitbit.com/oauth2/token"
// let contentType = 'application/x-www-form-urlencoded'
// // let contentType = 'application/json'
// // let client_id = '23B24F'
// // let client_secret = 'b827258a6cbef6f834536e65f3446f15'


// export async function fitbitAuthenticate() {
//   let body = {
//     grant_type: 'client_credentials',
//     expires_in: 31536000
//   }

//   let headers = {
//     'Authentication': `Basic ${encodedIDSecret}`,
//     // 'Access-Control-Request-Headers': 'Authorization',
//     // "Access-Control-Allow-Origin": "*",
//     // "Access-Control-Allow-Credentials": "true",
//     // "Access-Control-Allow-Methods": "POST",
//     // "mode": "no-cors",

//     // "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
//   }

//   let res = await fetch(url, {
//     method: 'POST',
//     headers: headers,
//     body: JSON.stringify(body)
//   })
//   console.log("Request complete! response:", res)
//   return res
// }


// // Helper method to wait for a middleware to execute before continuing
// // And to throw an error when an error happens in a middleware
// export function initMiddleware(middleware) {
//   return (req, res) =>
//     new Promise((resolve, reject) => {
//       middleware(req, res, (result) => {
//         if (result instanceof Error) {
//           return reject(result)
//         }
//         return resolve(result)
//       })
//     })
// }


export function getTags(posts) {
// returns an array of unique tags from all posts.

  // console.log(posts)

  let posts_tags = new Set()
  for (const post of posts) {
    let tags = post.frontMatter.tags
    // console.log(tags)
    for (const tag of tags) {
      posts_tags.add(tag)
    }
  }
  let post_tags_arr = Array.from(posts_tags)
  // return [...new Set(posts.map((post) => post.frontMatter.getTags))];
  return post_tags_arr 
}

export function getDates(posts) {
  let posts_dates = new Set()

  for (const post of posts) {
    let date = post.frontMatter.date
      posts_dates.add(date)
  }
  return Array.from(posts_dates)
}

// grabs name portion of url.
export function carousel_caption(url) {
  let name = url.split(".")[0]
  name = name.split('/')[name.split('/').length - 1]
  // console.log(name)
  return name
}