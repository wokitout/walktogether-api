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
    "partyId": "indexHash",
    "users": "[userId, userId]",
    "chain": "100"
  }
  
  user = {
    "userId": "indexHash",
    "name": "Bob Jones",
    "email": "BobJones@gmail.com",
    "phoneNum": "1234567890"
  }
  
  entry = {
    "entryId": "indexHash",
    "userId": "parent_reference",
    "steps": "9000",
    "date": "2015-11-02"
  }
```
