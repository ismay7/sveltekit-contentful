import { error } from '@sveltejs/kit'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import contentfulFetch from '$lib/contentful-fetch'

const query = `
{
  blogPostCollection {
    items {
      blogTitle
      blogBody { json }
      blogAuthor
    }
  }
}
`

export async function load() {
  const response = await contentfulFetch(query)

  if (!response.ok) {
    throw error(404, {
      message: response.statusText,
    })
  }
  const { data } = await response.json()
  const { items } = data.blogPostCollection
  // convert blogBody to HTML
  items.forEach(item => {
    item.blogBody = documentToHtmlString(item.blogBody.json)
  });

  return {
    blogs: items,
  }
}
