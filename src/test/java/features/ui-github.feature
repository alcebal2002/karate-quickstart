@demos @ui-github
Feature: browser automation 1

  Background:
    * configure driver = { type: 'chrome', executable: 'C:/users/aocs/AppData/Local/Google/Chrome/Application/chrome.exe' }
  # * configure driverTarget = { docker: 'justinribeiro/chrome-headless', showDriverLog: true }
  # * configure driverTarget = { docker: 'ptrthomas/karate-chrome', showDriverLog: true }
  # * configure driver = { type: 'chromedriver', showDriverLog: true }
  # * configure driver = { type: 'geckodriver', showDriverLog: true }
  # * configure driver = { type: 'safaridriver', showDriverLog: true }
  # * configure driver = { type: 'iedriver', showDriverLog: true, httpConfig: { readTimeout: 120000 } }

    * call read 'classpath:json/ui-locators.json'

  Scenario: try to login to github and then do a google search

    Given driver 'https://github.com/login'
    And input(login.input.username, 'dummy')
    And input(login.input.password, 'world')
    When submit().click(login.btn.commit)
    Then match html(login.label.error) contains 'Incorrect username or password.'

    # Given driver 'https://google.com'
    # And input("input[name=q]", 'karate dsl')
    # When submit().click("input[name=btnI]")
    # Then waitForUrl('https://github.com/karatelabs/karate')