from django.shortcuts import render

# Create your views here.
# ============================================================
# contact/views.py — API View (the Logic Layer)
#
# A "view" in Django handles incoming HTTP requests and returns
# responses. Think of it as the brain of your API endpoint.
#
# Flow when a client submits the form:
#   1. React sends POST request to /api/contact/
#   2. This view receives the request
#   3. Validates the data using ContactSerializer
#   4. Saves the message to the database
#   5. Returns a JSON success/error response to React
# ============================================================

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ContactMessage
from .serializers import ContactSerializer


class ContactAPIView(APIView):
    """
    API endpoint for receiving contact form submissions.

    Supported HTTP methods:
    - POST  → Save a new message (called by React contact form)
    - GET   → Return count of unread messages (optional, for your dashboard)
    """

    def post(self, request):
        """
        Handles POST requests from the React contact form.

        request.data contains the JSON body React sent:
        {
            "name": "John Doe",
            "email": "john@example.com",
            "subject": "Django Project",
            "message": "I need a REST API built..."
        }
        """

        # Pass the incoming data into the serializer for validation
        # request.data is the parsed JSON from React
        serializer = ContactSerializer(data=request.data)

        # Check if all fields are valid (required, correct format, etc.)
        if serializer.is_valid():
            # All good! Save the message to the database
            # This creates a new row in the ContactMessage table
            serializer.save()

            # Return a success response to React (HTTP 201 = Created)
            return Response(
                {
                    'message': "Thank you! I'll reply within 24 hours.",
                    'status': 'success'
                },
                status=status.HTTP_201_CREATED
            )

        # If validation failed, return the errors so React can display them
        # Example error: {"email": ["Enter a valid email address."]}
        return Response(
            {
                'message': 'Please check your input and try again.',
                'errors': serializer.errors,
                'status': 'error'
            },
            status=status.HTTP_400_BAD_REQUEST
        )

    def get(self, request):
        """
        Optional: Returns how many unread messages you have.
        You could use this to build a notification badge later.
        """
        # Count messages where is_read = False
        unread_count = ContactMessage.objects.filter(is_read=False).count()
        total_count = ContactMessage.objects.count()

        return Response(
            {
                'total_messages': total_count,
                'unread_messages': unread_count,
            },
            status=status.HTTP_200_OK
        )
