from django.shortcuts import render
from django.http import HttpResponse
import os
import json
from django.conf import settings
from . import models

def index(request):
    # return HttpResponse(f"hello world")
    # return HttpResponse(f"hello world {name * 5}")
    # return HttpResponse(f"hello world {age * 5}")

    # books_data = read_file('books.json')  # Load from file
    books_data = models.Books.objects.all()
    context = {
        "books": books_data
    }
    # go to sitting ->INSTALLED_APPS--> write books.apps.BooksConfig
    return render(request, 'books/index.html', context)


def single(request, book_id):
    context = {}
    # books_data = read_file('books.json')
    # for book in books_data:
    #     if book['id'] == book_id:
    #         context["book"]=book
    #         return render(request, 'books/single.html',context)
    book = models.Books.objects.get(pk=book_id)
    context={
        'book': book
    }
    return render(request, 'books/single.html',context)


def author(request, author_id):
    context = {}
    author = models.Author.objects.get(pk=author_id)
    context={
        'author': author,
        'books' : author.books.all()
    }
    return render(request, 'books/author.html',context)



# ---------helper methods----
# def read_file(file_name):
#     # json_path = os.path.join(settings.BASE_DIR, file_name)
#     json_path = os.path.join(settings.BASE_DIR, 'books', 'static', 'books', 'files', file_name)
#     with open(json_path, 'r') as file:
#         books = json.load(file)
#     return books