///////////////////JSON.stringify////////


const profiles = [
  {
    name: 'sunny',
    'favorite-game': 'hockey',
    subscriber: false
  },
  {
    name: 'rajul',
    'favorite-game': 'Runing',
    subscriber: true
  },

   {
    name: 'sunny',
    'favorite-game': 'hockey',
    subscriber: false
  },
  {
    name: 'rajul',
    'favorite-game': 'Runing',
    subscriber: true
  }
];

let result1 = JSON.stringify(profiles);

console.log(JSON.parse(result1))
