import {defineField, defineType} from 'sanity'

export const homeDestaquesType = defineType({
  name: 'homeDestaques',
  title: 'HomeDestaques',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
        name: 'descricao',
        type: 'string',
      }),
    defineField({
        name: 'imagem',
        type: 'image',
      }),
  ],
})