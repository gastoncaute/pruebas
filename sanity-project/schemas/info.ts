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
      title: 'Imagen o Video Principal',
      description: 'SUBIR SOLO UN TIPO DE ARCHIVO',
      type: 'object',
      fields: [
        {
          name: 'imagen',
          type: 'image',
          title: 'Imagen Principal',
        },
        {
          name: 'epigrafe',
          type: 'array',
          title: 'Epígrafe',
          of: [{type: 'block'}],
        },
        {
          name: 'video',
          type: 'file',
          title: 'Video Principal',
        },
        {
          name: 'video_epigrafe',
          type: 'array',
          title: 'Epígrafe',
          of: [{type: 'block'}],
        },
      ],
      validation: (Rule: any) => Rule.required().error('La "Imagen Principal" es obligatoria'),
    },
    // {
    //   name: 'file',
    //   title: 'Imagen o Video Principal',
    //   type: 'object',
    //   fields: [
    //     {
    //       name: 'imagen_principal',
    //       title: 'Imagen Principal',
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'imagen',
    //           type: 'image',
    //           title: 'Imagen',
    //           validation: (Rule: any) => Rule.required().error('La "Imagen" es obligatoria'),
    //         },
    //         {
    //           name: 'image_epigrafe',
    //           type: 'array',
    //           title: 'Epígrafe',
    //           of: [{type: 'block'}],
    //           validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
    //         },
    //       ],
    //     },
    //     {
    //       name: 'video_principal',
    //       title: 'Video Principal',
    //       type: 'object',
    //       fields: [
    //         {
    //           name: 'video',
    //           type: 'file',
    //           title: 'Video',
    //           validation: (Rule: any) => Rule.required().error('El "Video" es obligatorio'),
    //         },
    //         {
    //           name: 'video_epigrafe',
    //           type: 'array',
    //           title: 'Epígrafe',
    //           of: [{type: 'block'}],
    //           validation: (Rule: any) => Rule.required().error('El "Epígrafe" obligatorio'),
    //         },
    //       ],
    //     },
    //   ],
    //   validation: (Rule: any) =>
    //     Rule.required().error('La "Imagen o Video Principal" es obligatorio'),
    // },
  ],
}
