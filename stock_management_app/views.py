from rest_framework import generics
from .serializers import StockSerializer
from .models import Stock


class StockApiView(generics.ListAPIView):
    """
    Api view to return filtered stock in the api response
    """

    serializer_class = StockSerializer
    queryset = Stock.objects.all()

    def get_queryset(self):
        stock = self.kwargs['stock_name']
        response = self.queryset.filter(stock=stock).values()
        return response
