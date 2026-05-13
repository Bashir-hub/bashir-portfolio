# ============================================================
# portfolio/urls.py — Main URL Router
#
# Also patches Django Admin's "View Site" button here
# so it correctly points to your React frontend at port 3000
# instead of the broken default port 8000.
# ============================================================

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# ── Fix the "View Site" button ───────────────────────────────
# Django's default admin.site.site_url points to '/'
# which resolves to http://localhost:8000/ — a 404 error.
# This single line changes it to your React frontend URL.
# When you deploy, change this to your real domain.
admin.site.site_url = 'http://localhost:3000'

# ── Also customise the Admin panel headings ──────────────────
# These text labels appear on the Django Admin login and dashboard
admin.site.site_header = 'Bashir Sani Ibrahim — Admin'
admin.site.site_title  = 'BSI Admin Panel'
admin.site.index_title = 'Portfolio Dashboard'

urlpatterns = [

    # Django Admin panel — http://localhost:8000/admin/
    path('admin/', admin.site.urls),

    # All API routes — forwards to contact/urls.py
    path('api/', include('contact.urls')),

# Serve uploaded media files during development
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
