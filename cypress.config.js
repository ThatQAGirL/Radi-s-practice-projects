module.exports ={
  




  "defaultCommandTimeout" : 8000,
  "pageLoadTimeout": 30000,

  "env" :
  {
      "url" :  "https://rahulshettyacademy.com"

  },
  
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  
  projectId : "ubnz6r"

  }

}