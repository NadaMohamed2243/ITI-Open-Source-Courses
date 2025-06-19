from django.urls import path
from . import views

app_name='books'

urlpatterns = [
    # path("<name>", index , name='index')
    # path("<int:age>", index , name='index')
    # path("<int:age>", index , name='index')
    path("",views.index,name='index'),
    path("<int:book_id>", views.single , name='single')
]
