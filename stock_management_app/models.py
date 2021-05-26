from django.db import models


class Stock(models.Model):
    """
    Created Stock model with fields stock, close_price and date
    """

    stock = models.CharField(max_length=50, verbose_name = "Stock")
    close_price = models.FloatField(verbose_name = "Close Price")
    date = models.CharField(max_length=50, verbose_name = "Date")

    def __str__(self):
        return self.stock
