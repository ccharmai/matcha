## Models Schema

#### User
- login
- password hash
- name
- lastname
- sex
- orientation
- admin [ defaul = false ]

#### Token
- user (model User)
- token
- active [ defaul = true ]