import { pageLabelMapper } from "./constants"

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

export function filter_include_tags(tags, tagList, truthList) {
  for (const tag of tags) {
    if (truthList[tagList.indexOf(tag)] == true) {
      return true
    }
  }
  return false
}

// returns the title portion of path
export function get_image_title(img_props) {
  let title = img_props.src.split('/').slice(-1)[0]
  title = title.split('.').slice(-2)[0]
  return title
}

// returns the label for a title
export function labelMapper(plug) {
  if (plug in pageLabelMapper) {
    return pageLabelMapper[plug]
  }
  return ''
}