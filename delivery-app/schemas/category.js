import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Category Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'desription',
      type: 'string',
      title: 'Category Description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Category',
    },
  ],
})
