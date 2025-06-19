from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Books(models.Model):
    name = models.CharField(max_length=255)
    publish_date = models.DateField()
    add_to_site_at = models.DateField(auto_now_add=True)
    author = models.ForeignKey(
        Author, on_delete=models.CASCADE, related_name='books')
    price = models.DecimalField(max_digits=6, decimal_places=2)
    appropriate = models.CharField(max_length=10, choices=[
        ('under_8', 'Under 8'),
        ('8_15', '8-15'),
        ('adults', 'Adults'),
    ])

    def __str__(self):
        return self.name
