import requests


class WeatherApi:
    BASE_URL = "https://api.weatherapi.com/v1"

    def __init__(self, key):
        self.api_key = key

    def get_current_temperature(self, city):
        url = f"{self.BASE_URL}/current.json"
        payload = {'key': self.api_key, 'q': city}
        response = requests.get(url, params=payload)
        data = response.json()
        # print(data)
        return data['current']['temp_c']

    def get_temperature_after(self, city, days, hour=None):
        url = f"{self.BASE_URL}/forecast.json"
        payload = {'key': self.api_key, 'q': city, 'days': days}
        response = requests.get(url, params=payload)
        data = response.json()
        # https://api.weatherapi.com/v1/forecast.json?key=dca8618e5cbe49e29e1152407252304&q=Cairo&days=5
        # get all days until the mentioned day (ex 5 days -> if we in 24 --> this will return data of 24 25 26 27 28)
        # print(data['forecast']['forecastday'][-1]['hour'][hour]['temp_c'])
        # return forecast_day['hour'][hour]['temp_c'] if hour is not None else forecast_day['day']['avgtemp_c']

        # get our mentioned day
        forecast_day = data['forecast']['forecastday'][-1]

        # if we have hour parameter out of the range --> will throw exception to avoid program error
        if hour is not None:
            try:
                return forecast_day['hour'][hour]['temp_c']
            except IndexError:
                print(f"Hour {hour} is out of range (0–23).")
                return None
        else:
            # if we don't write hour --> get the avg temp
            return forecast_day['day']['avgtemp_c']

    def get_lat_and_long(self, city):
        url = f"{self.BASE_URL}/current.json"
        payload = {'key': self.api_key, 'q': city}
        response = requests.get(url, params=payload)
        data = response.json()
        # print(data['location'])
        return {'lat': data['location']['lat'], 'lon': data['location']['lon']}


w1 = WeatherApi("dca8618e5cbe49e29e1152407252304")
current_temperature_w1_c = w1.get_current_temperature("Cairo")
print(f"current temperature in Cairo is {current_temperature_w1_c} °C")

temperature_after_w1_c = w1.get_temperature_after("Cairo", 5, 18)
print(
    f"temperature after 5 days at 6 pm in Cairo will be {temperature_after_w1_c} °C")

get_lat_and_long_w1 = w1.get_lat_and_long("Cairo")
print(
    f"For Cairo the lat is : {get_lat_and_long_w1['lat']} , and the long is : {get_lat_and_long_w1['lon']}")
