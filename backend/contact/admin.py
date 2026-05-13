# Register your models here.
# ============================================================
# contact/admin.py — Django Admin Registration
#
# Registering a model here makes it appear in your Django
# Admin panel at http://localhost:8000/admin
#
# This is where you'll READ all client messages that come
# through your contact form. You can also mark them as read,
# delete spam, and reply from here.
# ============================================================

from django.contrib import admin
from .models import ContactMessage


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    """
    Customise how ContactMessage looks in the Django Admin panel.
    """

    # Columns to show in the list view of all messages
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']

    # Clickable link column — clicking name opens the message detail
    list_display_links = ['name', 'subject']

    # Filter sidebar — quickly filter by read/unread or date
    list_filter = ['is_read', 'created_at']

    # Search bar — searches across these fields
    search_fields = ['name', 'email', 'subject', 'message']

    # Date-based drill-down navigation
    date_hierarchy = 'created_at'

    # These fields cannot be edited in the admin (they're auto-set)
    readonly_fields = ['created_at']

    # Default ordering — newest messages first
    ordering = ['-created_at']

    # Bulk actions — adds "Mark as read" to the Actions dropdown
    actions = ['mark_as_read', 'mark_as_unread']

    def mark_as_read(self, request, queryset):
        """Mark selected messages as read."""
        # queryset is the set of selected rows
        updated = queryset.update(is_read=True)
        self.message_user(request, f'{updated} message(s) marked as read.')
    mark_as_read.short_description = 'Mark selected messages as read'

    def mark_as_unread(self, request, queryset):
        """Mark selected messages as unread."""
        updated = queryset.update(is_read=False)
        self.message_user(request, f'{updated} message(s) marked as unread.')
    mark_as_unread.short_description = 'Mark selected messages as unread'
