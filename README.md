# Minimal boilerplate with webpack for Google Apps Script

In 2018 we have so many boilerplate for google apps script but there are too big for daily scripting or make a trivial library. Since this issue, I made a new boilerplate depends on webpack only. There are no support for latest EcmaScript7+, we support for EcmaScript5. However, in the backend Babel is running but just translating to EcmaScript3 to run it with Google Apps Script's runtime. If you start scripting with this boilerplate, you can do like this.

```
$ npm install
$ npm install additional-packages-which-you-want
$ vi src/index.js
$ npm run build
$ clasp push
```

Let's enjoy!

## Terms
This boilerplate licensed under the MIT License.
Copyright (c) 2018 TANIGUCHI Masaya All Rights Reserved.
