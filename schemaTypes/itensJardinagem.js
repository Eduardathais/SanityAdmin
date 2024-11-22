import { defineField, defineType } from 'sanity';

export const itensJardinagem = defineType({
  name: 'cadastroItensJardinagem',
  title: 'cadastroItensJardinagem',
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
