const usersLogins = [
  'luxplanjay',
  'SofiaProtsiv',
  'qweeqer',
  'Maxwelllife',
  'xWinst',
  'AleksZhov',
  'gsmoff',
];

const BASE_URL = 'https://api.github.com';
const END_POINT = '/users';

async function getUserAvatars(usersLogins) {
  const userAvatars = usersLogins.map(async userName => {
    const res = await fetch(`${BASE_URL}${END_POINT}/${userName}`);
    return res.json();
  });
  return Promise.all(userAvatars);
  //   const userAvatars = usersLogins.map(userName => {
  //     return fetch(`${BASE_URL}${END_POINT}/${userName}`).then(res => res.json());
  //   });
  //   return Promise.all(userAvatars);
}
getUserAvatars(usersLogins).then(data => {
  console.log(data);
});
