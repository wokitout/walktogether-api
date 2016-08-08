# walktogether-api

## API routes

#GET
- /getAllSteps
- /getStepsToday
- /getParty
- /getUser

#POST
- /requestParty
- /makeParty
- /makeChain
- /addChain
  
- /makeUser
- /authUser
- /login
- /logout

- /makeEntry
- /updateEntry

## Schema

```json
  party = {
    partyId: type(indexHash)
    users: type(Array[userId, userId])
    chain: type(int)
  }
  
  user = {
    userId: type(indexHash)
    name: type(string)
    email: type(string)
    phoneNum: type(int)
  }
  
  entry = {
    entryId: type(indexHash)
    userId: type(parent_reference)
    steps: type(int)
    date: type(date)
  }
```
