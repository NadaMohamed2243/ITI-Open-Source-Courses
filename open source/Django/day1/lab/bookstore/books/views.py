from django.shortcuts import render
from django.http import HttpResponse
import os
import json
from django.conf import settings


def index(request):
    # return HttpResponse(f"hello world")
    # return HttpResponse(f"hello world {name * 5}")
    # return HttpResponse(f"hello world {age * 5}")

    books_data = read_file('books.json')  # Load from file
    context = {
        "books": books_data
    }
    # go to sitting ->INSTALLED_APPS--> write books.apps.BooksConfig
    return render(request, 'books/index.html', context)


def single(request, book_id):
    context = {}
    books_data = read_file('books.json')
    for book in books_data:
        if book['id'] == book_id:
            context["book"]=book
            return render(request, 'books/single.html',context)



# ---------helper methods----
def read_file(file_name):
    # json_path = os.path.join(settings.BASE_DIR, file_name)
    json_path = os.path.join(settings.BASE_DIR, 'books', 'static', 'books', 'files', file_name)
    with open(json_path, 'r') as file:
        books = json.load(file)
    return books