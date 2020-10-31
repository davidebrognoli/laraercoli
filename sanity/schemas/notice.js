export default {
    title: 'Avviso',
    name: 'notice',
    type: 'document',
    fields: [
      {
        title: 'Titolo',
        name: 'title',
        type: 'string'
      },
      {
        title: 'Descrizione',
        name: 'description',
        type: 'array',
        of: [
          {
            type: 'block'
          }
        ]
      },
      {
        title: 'Data',
        name: 'date',
        type: 'date',
        options: {
          dateFormat: 'DD/MM/YYYY',
          calendarTodayLabel: 'Oggi'
        }
      }
    ]
  }