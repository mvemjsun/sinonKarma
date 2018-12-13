# Mocha, Chai & Karma in Action

Starter project for you to experiment 🎯

## Minimal SUT

- A country class
- A CountryRegister for maintaining a list of countries created
- A Util to add countries to the register

## To run the tests

- Clone repo
- Run `npm i` to install node 
- `npm run test`, this will load Karma test runner and run the tests. It will then wait in watch for changes and run tests
 automatically if things change.

 ```
Running "karma:unit" (karma) task
13 12 2018 10:12:41.301:INFO [framework.browserify]: registering rebuild (autoWatch=true)
13 12 2018 10:12:43.624:INFO [framework.browserify]: 3276671 bytes written (1.57 seconds)
13 12 2018 10:12:43.659:INFO [framework.browserify]: bundle built
13 12 2018 10:12:43.674:WARN [karma]: No captured browser, open http://localhost:9876/
13 12 2018 10:12:43.678:INFO [karma-server]: Karma v3.1.3 server started at http://0.0.0.0:9876/
13 12 2018 10:12:43.678:INFO [launcher]: Launching browsers PhantomJS with concurrency unlimited
13 12 2018 10:12:43.685:INFO [launcher]: Starting browser PhantomJS
13 12 2018 10:12:44.709:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket 1QPVcHyjf8ee05Y8AAAA with id 99796254

START:
13 12 2018 10:12:44.721:WARN [middleware:karma]: Invalid file type, defaulting to js. browserify
  Country
    ✔ constructor should create a new country with a name
  CountryRegister
    instance
      ✔ should return the same instance of register always
    addToRegister
      ✔ should add names to population register
    remove
      ✔ should remove name from the register
  RegisterUtil
    ✔ should call add to register when country not available
    ✔ should not call add to register when country available
    ✔ should not call add to register when country name empty
    ✔ should not call add to register when country name undefined

Finished in 0.015 secs / 0.006 secs @ 10:12:44 GMT+0000 (GMT)

SUMMARY:
✔ 8 tests completed
```
 