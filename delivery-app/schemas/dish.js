import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'dish',
  title: 'Dishes',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Dish Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'desription',
      type: 'string',
      title: 'Dish Description',
      validation: (rule) => rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the Dish',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price for the Dish in USD',
    },
  ],
})
