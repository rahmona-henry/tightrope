module.exports = {
  'friend test 1': function (browser) {
    browser
        .url('http://localhost:8080/login')
        .waitForElementVisible('body', 1000)
        .setValue('input[type="email"]', 'nightwatch@nighttime.com')
        .setValue('input[type="password"]', 'a')
        .click('input[value="Sign In"]')
  },

  'friend test 2': function (browser) {
    browser
        .waitForElementVisible('body', 1000)
        .waitForElementVisible('#friend-link', 1000)
        .url('http://localhost:8080/friends')
        .end()
  }
}
