# ============================================================
# contact/serializers.py — Data Serializer
#
# A serializer acts as a translator between:
#   JSON (what React sends) ←→ Python objects (what Django uses)
#
# When React sends form data to your API as JSON, the serializer:
#   1. Validates the data (checks required fields, email format, etc.)
#   2. Converts it into a Django model instance
#   3. Saves it to the database
#
# It also converts model data back to JSON when needed.
# ============================================================

from rest_framework import serializers
from .models import ContactMessage


class ContactSerializer(serializers.ModelSerializer):
    """
    Serializer for the ContactMessage model.
    Converts incoming JSON → validated data → saved model instance.
    """

    class Meta:
        # Tell the serializer which model to work with
        model = ContactMessage

        # These are the fields React will send in the POST request.
        # We exclude 'created_at' and 'is_read' because:
        # - created_at is set automatically by Django
        # - is_read is managed by you in the admin panel
        fields = ['id', 'name', 'email', 'subject', 'message']

        # 'id' is read-only — Django assigns it automatically
        read_only_fields = ['id']

    # --- Custom Validation ---
    # You can add extra validation rules here.
    # Django REST Framework calls these automatically.

    def validate_name(self, value):
        """
        Make sure the name field isn't just whitespace.
        Called automatically when .is_valid() is run.
        """
        # Strip whitespace and check if it's empty
        if not value.strip():
            raise serializers.ValidationError("Name cannot be blank.")
        return value.strip()  # Return cleaned value

    def validate_message(self, value):
        """
        Make sure the message has at least 10 characters.
        Prevents spam or accidental empty submissions.
        """
        if len(value.strip()) < 10:
            raise serializers.ValidationError(
                "Message must be at least 10 characters long."
            )
        return value.strip()
