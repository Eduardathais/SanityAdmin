import { defineField, defineType } from 'sanity';

export const vasosECacheposType = defineType({
  name: 'cadastroVN',
  title: 'cadastroVasosCachepôs',
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
