import { defineField, defineType } from 'sanity';

export const presentesType = defineType({
  name: 'cadastroPresentes',
  title: 'cadastroPresentes',
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
