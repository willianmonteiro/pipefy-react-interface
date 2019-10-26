export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar NodeJS',
          labels: ['#3b5bfd'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 2,
          content: 'Estudando drag and Drop usando interface do Pipefy',
          labels: ['#3b5bfd'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 3,
          content: 'Estudar React Native',
          labels: ['#037068'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 4,
          content: 'Estudar ReactJS"',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Aprender sobre Geolocalização e mapas com React Native',
          labels: ['#3b5bfd'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 8,
          content: 'Estudar testes e deploy ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Aprender sobre deploy e CI com React Native',
          labels: [],
        },
        {
          id: 12,
          content: 'Estudar testes e deploy ReactJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Aprender Internacionalização de aplicações Node.js, ReactJS e React Native',
          labels: ['#3b5bfd'],
        }
      ]
    },
  ];
}