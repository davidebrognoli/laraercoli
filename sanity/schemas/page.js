export default {
    name: 'page',
    title: 'Pagine',
    type: 'document',
    liveEdit: false,
    __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
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