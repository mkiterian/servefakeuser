const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// NOTE - when switching roles
// a society president and a society secretary must have a fellow key-value pair in roles
// staff members e.g cio, success ops do not have a society

// Example: Society president
// "society": {
//   "name": "Invictus"
// }
// "roles": {
//   "fellow": "abc123",
//   "society president": "abc"
// },

app.get('/users/:id', (req, res) => {
  res.json(
    {
      "data": {
        "cohort": {
          "createdAt": "2018-05-29T17:34:45.868267+00:00",
          "description": null,
          "id": "-Kkh3MFLCBgVTSZ4s-de",
          "modifiedAt": null,
          "name": "Class 17 - NBO",
          "photo": null
        },
        "location": {
          "createdAt": "2018-05-29T17:34:45.859205+00:00",
          "description": null,
          "id": "-JqPKs52HaqLXCVQlwZL",
          "modifiedAt": null,
          "name": "Nairobi",
          "photo": null
        },
        "createdAt": "2018-05-15 18:31:47.376565",
        "description": "None",
        "email": "test@andela.com",
        "modifiedAt": "None",
        "name": "test test",
        "photo": "https://lh3.googleusercontent.com/-Ke1NKb5MPuk/AAAAAAAAAAI/AAAAAAAAABg/8ofOe_CueLA/photo.jpg?sz=50",
        "society": {
          "name": "Invictus"
        },
        "roles": {
          "fellow": "abc123",
          "society president": "abc"
        },
        "totaLoggedPoints": 0,
        "id": "-KjEeawq1u2_1LvCZ7cX"
      }
    }
  );
});

app.listen(5000, () => {
  console.log('Serving user details on Port 5000');
});