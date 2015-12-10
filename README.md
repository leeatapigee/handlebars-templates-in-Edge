# handlebars-templates-in-Edge

Source code to accompany https://community.apigee.com/articles/14317/flexible-handlebars-templates.html.

Import the two Apigee proxy bundles, WeatherViaTemplate.zip and MashupViaTemplate.zip.

Use the management APIs to create the two org resource files containing handlebars.js and populateTemplate.js.

Test WeatherViaTemplate:
curl http://<org>-<env>.apigee.net/v1/weatherviatemplate?zipcode=55555

Test MashupViaTemplate:
curl -X POST -d '{"woeid":"12797282"}' -H "Content-type: application/json" http://<org>-<env>.apigee.net/mashupviatemplate/forecastrss
