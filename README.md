# walktogether-api

## API routes
#GET
 Fitness
   - /getAllSteps
   - /getStepsToday
   
 User
   - /getParty
   - /getUser

#POST
 Party
   - /requestParty
   - /makeParty
   - /makeChain
   - /addChain
  
  User
   - /makeUser
   - /authUser
   - /login
   - /logout

  Fitness
  - /makeEntry
  - /updateEntry
    
## Schema

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
