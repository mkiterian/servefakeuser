#### How to Use

In the root directory run these commands
`yarn` to install dependencies
`yarn start` to run the server

Replace the url in the fetchUserProfile thunk i.e

~~return http.get(`${config.API_BASE_URL}/users/${id}`)~~ 
return http.get(`http://localhost:5000/users/1${id}`)



