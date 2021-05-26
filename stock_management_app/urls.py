from django.conf.urls import url
from .views import StockApiView


app_name = "stock"

urlpatterns = [
    url(r"stock/(?P<stock_name>[\w-]+)/$",StockApiView.as_view(),name="stock",),
]
