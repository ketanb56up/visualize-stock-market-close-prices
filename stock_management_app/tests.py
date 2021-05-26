from django.test import TestCase
from .models import Stock


class StockManagementTestCase(TestCase):

    def setUp(self):

        Stock.objects.create(
        	stock='NVMZ',
        	close_price='30.0067',
        	date='2021-05-17'
        )

    def test_verifiy_stock_data(self):
        
        filter_stock = Stock.objects.filter(stock='NVMZ').values()

        self.assertIn('NVMZ', filter_stock.first()['stock'])
