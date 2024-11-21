import { defineField, defineType } from 'sanity';

export const buqueType = defineType({
  name: 'cadastroBuque',
  title: 'cadastroBuques',
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
