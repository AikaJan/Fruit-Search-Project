const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = [
  'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', // ... (your entire list)
];

function search(str) {
  let results = [];

  for (let item of fruit) {
    if (item.toLowerCase().includes(str.toLowerCase())) {
      results.push(item);
    }
  }

  return results;
}

function searchHandler(e) {
  const inputValue = e.target.value;
  const results = search(inputValue);
  showSuggestions(results);
}

function showSuggestions(results) {
  suggestions.innerHTML = ''; 
  results.forEach(result => {
    const li = document.createElement('li');
    li.textContent = result;
    suggestions.appendChild(li);
  });
}

function useSuggestion(e) {
  if (e.target.tagName === 'LI') {
    input.value = e.target.textContent;
    suggestions.innerHTML = ''; 
  }
}

input.addEventListener('input', searchHandler); 
suggestions.addEventListener('click', useSuggestion);
