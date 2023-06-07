@demos @ui-pdf
Feature: ui pdf generation

  Background:
    * configure driver = { type: 'chrome', executable: 'C:/users/aocs/AppData/Local/Google/Chrome/Application/chrome.exe' }
    * call read 'classpath:json/ui-locators.json'

  Scenario: open html and generate a pdf

    Given driver 'file:///C:/Users/aocs/Trabajo/git-workspace/karate-quickstart/src/test/java/html/overview-features.html'
    * def pdfDoc = pdf({'orientation': 'landscape'})
    * karate.write(pdfDoc, "pdfDoc.pdf")
