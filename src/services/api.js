export function loadLists() {
  return [
    { 
      title: 'To do', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#3b5bfd'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 2,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#3b5bfd'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 3,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#037068'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 4,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 5,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
      ]
    },
    { 
      title: 'In Progress', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: [],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        }
      ]
    },
    { 
      title: 'Paused', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#3b5bfd'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 8,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#54e1f7'],
          user: 'https://avatars3.githubusercontent.com/u/11152984'
        },
        {
          id: 9,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: [],
        }
      ]
    },
    { 
      title: 'Done', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: [],
        },
        {
          id: 12,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          labels: ['#3b5bfd'],
        }
      ]
    },
  ];
}