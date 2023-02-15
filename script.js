let input = document.querySelector('#input-container input')

const addTask = () => {
	if (input.value.length == 0) {
		alert('😐 Enter Task Name!!')
	} else {
		document.querySelector('#tasks').innerHTML += `
              <li class="item">
              <input type="checkbox" name="" class="check" id="check" onClick="updateTask(this)" />
              <div class="text">${input.value}</div>
              <button class="delete" id="delete" onClick="deleteTask(this)">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon trash" width="18" height="18" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
          </li>
              `
	}
}

const deleteTask = (e) => {
	e.parentNode.remove()
}

const updateTask = (e) => {
	if (e.checked) {
		e.parentElement.classList.add('checked')
	} else {
		e.parentElement.classList.remove('checked')
	}
}
