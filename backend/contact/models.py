# Create your models here.
# ============================================================
# contact/models.py — Database Model for Contact Messages
#
# A Django "model" is a Python class that represents a table
# in your database. Each attribute in the class becomes a
# column in the database table.
#
# When a client submits the contact form on your portfolio,
# the data gets saved as a row in this table.
# You can read all messages in the Django Admin panel at:
# http://localhost:8000/admin
# ============================================================

from django.db import models


class ContactMessage(models.Model):
    """
    Stores a single contact form submission from a website visitor.
    Each instance = one message from one client.
    """

    # The client's full name (max 200 characters)
    name = models.CharField(max_length=200)

    # The client's email address
    # Django validates that it's a proper email format
    email = models.EmailField()

    # Subject line of the message (max 300 characters)
    subject = models.CharField(max_length=300)

    # The full message body (unlimited length — TextField)
    message = models.TextField()

    # Automatically saves the date and time when the message was received
    # auto_now_add=True means it's set once on creation and never changed
    created_at = models.DateTimeField(auto_now_add=True)

    # Whether you've read/responded to this message (useful for your admin workflow)
    # Defaults to False — you can manually mark messages as read in Admin
    is_read = models.BooleanField(default=False)

    class Meta:
        # In Django Admin, the table will be listed under this name
        verbose_name = 'Contact Message'
        verbose_name_plural = 'Contact Messages'
        # Show newest messages first in the admin panel
        ordering = ['-created_at']

    def __str__(self):
        # This is what shows up in Django Admin list view
        # e.g. "Message from John Doe — Django API Project"
        return f"Message from {self.name} — {self.subject}"
