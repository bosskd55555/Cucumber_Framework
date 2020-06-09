$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "FreeCRM application test",
  "description": "",
  "id": "freecrm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate Login page",
  "description": "",
  "id": "freecrm-application-test;validate-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on login page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Validate Homepage title",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Logout from the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSteps.user_opens_browser()"
});
formatter.result({
  "duration": 24183412952,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 272108958,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.user_enters_username_and_password()"
});
formatter.result({
  "duration": 1490386482,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.validate_Homepage_title()"
});
formatter.result({
  "duration": 22511633,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.logout_from_the_application()"
});
formatter.result({
  "duration": 8594173412,
  "status": "passed"
});
});