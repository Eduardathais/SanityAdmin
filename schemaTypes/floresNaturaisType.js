import { defineField, defineType } from 'sanity';

export const floresNaturaistype = defineType({
  name: 'cadastroFloresNaturais',
  title: 'cadastroFloresNaturais',
  type: 'document',
  fields: [
    defineField({
      name: 'imagem',
      type: 'image',
    }),
    defineField({
      name: 'nome',
      type: 'string',
    }),
  ],
});
