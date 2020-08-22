<a href="https://www.npmjs.com/package/dcbotmakerjs"><img src="https://img.shields.io/npm/v/dcbotmakerjs.svg?maxAge=3600" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/dcbotmakerjs"><img src="https://img.shields.io/npm/dt/dcbotmakerjs.svg?maxAge=3600" alt="NPM version" /></a>
 
<a href="https://nodei.co/npm/dcbotmakerjs/"><img src="https://nodei.co/npm/dcbotmakerjs.png?downloads=true&stars=true"></img></a>

# How Connect?
```
const client = require('discordbotmaker');
client.login("token")
```

# How to place commands?
```
const client = require('discordbotmaker');
client.login("token");
client.ping("prefix");
```

# Added:
`<client>.presence.<type: playing/watching/listening>("someting...")`
`<client>.ajuda("prefix")`

# Fixed: 
`<client>.say("prefix")`

# What we need to fix:
`<client>.status("online/idle/dnd");


# ⚠️ Warning ⚠️
This package is in Portuguese!
