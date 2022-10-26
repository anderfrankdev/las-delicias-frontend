export const getById = (id) => document.getElementById(id)

export const addView = (view) => {

	const {html,css} = typeof view === 'function' 
    ? view(state)
    : view;

	document.getElementById("styles").innerHTML += css
	document.getElementById("app").innerHTML += html
}