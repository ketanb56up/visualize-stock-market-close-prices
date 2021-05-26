from django.contrib import admin
from .models import Stock


class StockAdmin(admin.ModelAdmin):
    # Display stocks fields on the admin interface

    list_display = ('stock', 'close_price', 'date')

admin.site.register(Stock, StockAdmin)
