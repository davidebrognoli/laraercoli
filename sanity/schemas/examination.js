export default {
    title: 'Tema esame',
    name: 'examination',
    type: 'document',
    fields: [
      {
        title: 'Titolo',
        name: 'title',
        type: 'string'
      },
      {
        title: 'File',
        name: 'file',
        type: 'file'
      },
      {
        title: 'Anno accademico',
        name: 'year',
        type: 'reference',
        to: [{type: 'academic_year'}]
      }
    ]
  }