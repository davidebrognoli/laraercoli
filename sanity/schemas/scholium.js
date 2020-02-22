export default {
    title: 'Materiale',
    name: 'scholium',
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
        type: 'text'
      },
      {
        title: 'Ultimo aggiornamento',
        name: 'lastUpdate',
        type: 'date',
        options: {
          dateFormat: 'DD/MM/YYYY',
          calendarTodayLabel: 'Oggi'
        }
      },
      {
        title: 'File',
        name: 'file',
        type: 'file'
      }
    ]
  }