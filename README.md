# handlebars-templates-in-Edge

Source code to accompany https://community.apigee.com/articles/14317/flexible-handlebars-templates.html.

### To run
1. Import the two Apigee proxy bundles, WeatherViaTemplate.zip and MashupViaTemplate.zip.

2. Use the management APIs to create the two org resource files containing handlebars.js and populateTemplate.js.

3. Test WeatherViaTemplate:

    curl http://{org}-{env}.apigee.net/v1/weatherviatemplate?zipcode=55555

    Response:

```xml
    <?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><GetCityWeatherByZIPResponse xmlns="http://ws.cdyne.com/WeatherWS/"><GetCityWeatherByZIPResult><Success>true</Success><ResponseText>City Found</ResponseText><State>MN</State><City>Young America</City><WeatherStationCity>Mayer</WeatherStationCity><WeatherID>14</WeatherID><Description>Cloudy</Description><Temperature>43</Temperature><RelativeHumidity>81</RelativeHumidity><Wind>E7</Wind><Pressure>30.08F</Pressure><Visibility /><WindChill /><Remarks /></GetCityWeatherByZIPResult></GetCityWeatherByZIPResponse></soap:Body></soap:Envelope>
```

4. Test MashupViaTemplate:

    curl -X POST -d '{"woeid":"12797282"}' -H "Content-type: application/json" http://{org}-{env}.apigee.net/mashupviatemplate/forecastrss

    Response:

```json
    {
	  "request": {"woeid":"12797282"},
   	"response": {"rss":{"version":2.0,"channel":{"title":"Yahoo! Weather - Palo Alto, CA","link":"http:\/\/us.rd.yahoo.com\/dailynews\/rss\/weather\/Palo_Alto__CA\/*http:\/\/weather.yahoo.com\/forecast\/USCA1093_f.html","description":"Yahoo! Weather for Palo Alto, CA","language":"en-us","lastBuildDate":"Wed, 09 Dec 2015 4:47 pm PST","ttl":60,"location":{"city":"Palo Alto","region":"CA","country":"United States"},"units":{"temperature":"F","distance":"mi","pressure":"in","speed":"mph"},"wind":{"chill":63,"direction":340,"speed":5},"atmosphere":{"humidity":82,"visibility":10,"pressure":30.05,"rising":2},"astronomy":{"sunrise":"7:11 am","sunset":"4:49 pm"},"image":{"title":"Yahoo! Weather","width":142,"height":18,"link":"http:\/\/weather.yahoo.com","url":"http:\/\/l.yimg.com\/a\/i\/brand\/purplelogo\/\/uh\/us\/news-wea.gif"},"item":{"title":"Conditions for Palo Alto, CA at 4:47 pm PST","lat":37.4,"long":-122.17,"link":"http:\/\/us.rd.yahoo.com\/dailynews\/rss\/weather\/Palo_Alto__CA\/*http:\/\/weather.yahoo.com\/forecast\/USCA1093_f.html","pubDate":"Wed, 09 Dec 2015 4:47 pm PST","condition":{"text":"Mostly Cloudy","code":28,"temp":63,"date":"Wed, 09 Dec 2015 4:47 pm PST"},"description":"\n<img src=\"http:\/\/l.yimg.com\/a\/i\/us\/we\/52\/28.gif\"\/><br \/>\n<b>Current Conditions:<\/b><br \/>\nMostly Cloudy, 63 F<BR \/>\n<BR \/><b>Forecast:<\/b><BR \/>\nWed - Rain Late. High: 68 Low: 55<br \/>\nThu - Rain. High: 62 Low: 47<br \/>\nFri - Partly Cloudy. High: 59 Low: 43<br \/>\nSat - Partly Cloudy. High: 60 Low: 49<br \/>\nSun - Rain. High: 59 Low: 42<br \/>\n<br \/>\n<a href=\"http:\/\/us.rd.yahoo.com\/dailynews\/rss\/weather\/Palo_Alto__CA\/*http:\/\/weather.yahoo.com\/forecast\/USCA1093_f.html\">Full Forecast at Yahoo! Weather<\/a><BR\/><BR\/>\n(provided by <a href=\"http:\/\/www.weather.com\" >The Weather Channel<\/a>)<br\/>\n","forecast":[{"day":"Wed","date":"9 Dec 2015","low":55,"high":68,"text":"Rain Late","code":12},{"day":"Thu","date":"10 Dec 2015","low":47,"high":62,"text":"Rain","code":12},{"day":"Fri","date":"11 Dec 2015","low":43,"high":59,"text":"Partly Cloudy","code":30},{"day":"Sat","date":"12 Dec 2015","low":49,"high":60,"text":"Partly Cloudy","code":30},{"day":"Sun","date":"13 Dec 2015","low":42,"high":59,"text":"Rain","code":12}],"guid":{"isPermaLink":"false","content":"USCA1093_2015_12_13_7_00_PST"}}}}},
		"arrayElem1": 1,
		"arrayElem2": 2,
		"arrayElem3": 3,
		"arrayElem4": 4,
		"arrayElem5": 5,
	    "array": [1,2,3,4,5],
    	"uuid": '8dd3017b-b158-0228-6431-d329739ff918'
}
```
