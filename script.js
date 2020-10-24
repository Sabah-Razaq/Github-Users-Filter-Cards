const display = document.getElementById('display');
const filter = document.getElementById('filter');

fetch('https://api.github.com/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    filterCards(data);
  });

const filterCards = data => {
  data.forEach(item => {
    const div = document.createElement('div');
    div.classList = 'user card mb-4'
    output = `
    <div>
    <h2 class='card-tittle'>${item.login}</h2>
    </div>
    <div>
    <img class="img-fluid rounded-circle" src="${item.avatar_url}" width="150">
    </div>
    `;
    div.innerHTML = output;
    display.appendChild(div);
  });
};

const filterList = e => {
  let filterTarget = e.target.value.toUpperCase();
  let users = document.querySelectorAll('.user');
  users.forEach(user => {
    user.textContent.toUpperCase().includes(filterTarget)
      ? (user.style.display = '')
      : (user.style.display = 'none');
  });
};

filter.addEventListener('input', filterList);