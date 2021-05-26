from rest_framework import serializers
from .models import Stock


class StockSerializer(serializers.ModelSerializer):
    # Created serializer to return required field in the response

    class Meta:
        model = Stock
        fields = [
            'stock',
            'close_price',
            'date',
        ]
