## register a user

/api/register
```
username: "",
password: ""
```

## log in a user

/api/login
```
username: "",
password: ""
```

## get mountains

/api/mountains

## post a mountain

/api/mountains 

```
  {
    "id": 1,
    "mountain_name": "Snowmass",
    "nearest_town": "Snowmass, CO",
    "description": "It has the best of all worlds: park, cruisy tree runs, and steeps"
  }
```
## post a comment

/api/comments
ID is provided automatically.
`mountain_id` is the id of the mountain for which you are adding the comment.
`user_id` is the id of the current user.

```
{
  "id": 1, 
  "mountain_id": 1,
  "user_id": 1,
  "comment": "text within a string"
}
```
