from django.core.management.base import BaseCommand
from datetime import datetime, timedelta
import requests
import pandas as pd
import json
from stock_management_app.models import Stock


class Command(BaseCommand):
    help = 'Store stocks records in database'

    def handle(self, *args, **kwargs):

        get_data = []
        start_date = datetime.today()
        api_key = 'YsW_oS70ym9GSj_PM5X45hzpEUvwnrJD'

        # Get stock data from ploygon api.
        for day in range(1, 11):
            date = (start_date-timedelta(days=day)).strftime('%Y-%m-%d')

            """
            Api return 5 requests per minutes
            that why we can store 5 records at a time.
            """
            ploygon_url = 'https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/{date}?apiKey={api_key}'.format(date=date,api_key=api_key)
            response = requests.get(ploygon_url)

            try:
                result = json.loads(response._content)['results']
                df = pd.DataFrame(result, columns=['T', 'c', 't'])
                df['t'] = pd.to_datetime(df['t']).apply(lambda x: date)

                #Append required fields and data into a new list. 
                for data in df.iloc():
                    symbol = data['T']
                    close_price = data['c']
                    date = data['t']
                    get_stocks = Stock(stock=symbol, close_price=close_price, date=date)
                    get_data.append(get_stocks)

            except Exception as e:
                print(e)

        # Store list data to the database
        Stock.objects.bulk_create(get_data)
