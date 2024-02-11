export default {
  name: 'info',
  type: 'document',
  title: 'Noticias',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Título',
      validation: (Rule: any) => [
        Rule.required().error('El "Título" es obligatorio'),
        Rule.max(110).error('El "Título" debe tener 110 caracteres como máximo'),
      ],
    },
    {
      name: 'image_principal',
      title: 'Imagen Principal',
      type: 'object',
      fields: [
        {
          name: 'imagen',
          type: 'image',
          title: 'Imagen',
          validation: (Rule: any) => Rule.required().error('La "Imagen" es obligatoria'),
        },
        {
          name: 'epigrafe',
          type: 'array',
          title: 'Epígrafe',
          of: [{type: 'block'}],
          validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
        },
      ],
      validation: (Rule: any) => Rule.required().error('La "Imagen Principal" es obligatoria'),
    },
  ],
}
