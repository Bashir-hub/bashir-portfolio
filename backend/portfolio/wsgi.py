# ============================================================
# portfolio/wsgi.py — WSGI Application Entry Point
#
# WSGI (Web Server Gateway Interface) is the standard way
# Python web apps communicate with web servers.
# Django uses this file to start the server.
# You don't need to edit this file.
# ============================================================

import os
from django.core.wsgi import get_wsgi_application

# Tell Django which settings file to use
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio.settings')

# Create the WSGI application object
# Django's runserver command uses this to start
application = get_wsgi_application()