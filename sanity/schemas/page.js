export default {
    name: 'page',
    title: 'Pagine',
    type: 'document',
    liveEdit: false,
    fields: [
      {
        name: 'title',
        title: 'Titolo',
        type: 'string'
      },
      {
        name: 'body',
        title: 'Contenuto',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      }  
    ]
  }