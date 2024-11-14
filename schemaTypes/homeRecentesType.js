import {defineField, defineType} from 'sanity'

export const homeRecentesType = defineType({
  name: 'homeRecentes',
  title: 'HomeRecentes',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
        name: 'imagem',
        type: 'image',
      }),
  ],
})