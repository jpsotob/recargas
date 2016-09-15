
const API_BASE = '/api'

export const loginUser = (code) => {
  return fetch(`${API_BASE}/authenticate`,
    {
      method: 'POST',
      body: JSON.stringify({ 'code': code }),
      headers: new Headers({
    		'Content-Type': 'application/json'
    	})
    })
    .then(res => res.json())
}

export const submitRecharge = (company, amount, number, token) =>{
  console.log('lul')
  return Promise.resolve()
}
