# ============================================================
# contact/urls.py — URL Routes for the Contact App
#
# This file maps URL paths to views.
# When Django receives a request to /api/contact/,
# it looks up this file and calls the matching view.
# ============================================================

from django.urls import path
from .views import ContactAPIView

# URL patterns for the contact app
urlpatterns = [
    # POST /api/contact/ → receives and saves a new contact message
    # GET  /api/contact/ → returns unread message count
    path('contact/', ContactAPIView.as_view(), name='contact-api'),
]
