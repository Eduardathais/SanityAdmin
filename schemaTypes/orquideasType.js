import { defineField, defineType } from 'sanity';

export const orquideasType = defineType({
  name: 'cadastroOrquideas',
  title: 'cadastroOrquídeas',
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

