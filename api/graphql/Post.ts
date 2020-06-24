// api/graphql/Post.ts

import { schema } from 'nexus'

schema.objectType({
  name: 'Post',
  definition(t) {
    t.int('id')
    t.string('title')
    t.string('body')
    t.boolean('published')
  },
})

schema.extendType({
  type: 'Query',
  definition(t) {
    t.list.field('drafts', {
      nullable: false,
      type: 'Post',
      list: true,
      resolve() {
        return [{ id: 1, title: 'Nexus', body: '...', published: false }]
      },
    })
  },
})