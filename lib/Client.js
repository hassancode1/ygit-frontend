import sanityClient from '@sanity/client'
export const client = sanityClient({
  projectId: 'ofzjw8m8',
  dataset: 'production',
  useCdn: true
})