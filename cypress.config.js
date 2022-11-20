module.exports ={
  




  "defaultCommandTimeout" : 8000,
  "pageLoadTimeout": 30000,
  "reporter": "mochawesome",

  "env" :
  {
      "url" :  "https://rahulshettyacademy.com"

  },
/*
  "retries" : {
  "runMode": 1

  },
  */
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  
  projectId : "qu2kmg"



  }

}