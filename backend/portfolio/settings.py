# ============================================================
# portfolio/settings.py — Django Settings (Production Ready)
#
# Works for BOTH local development AND Railway deployment.
# Reads sensitive values from environment variables so
# passwords and secret keys are never uploaded to GitHub.
# ============================================================

from pathlib import Path
import os

# Load variables from .env file when running locally
# On Railway, variables are set in the dashboard instead
from dotenv import load_dotenv
load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent


# ── Security ──────────────────────────────────────────────────

# Read SECRET_KEY from environment — never hardcode this
SECRET_KEY = os.environ.get(
    'SECRET_KEY',
    'django-insecure-fallback-change-in-production'
)

# True locally, False on Railway (set in Railway dashboard)
DEBUG = os.environ.get('DEBUG', 'True') == 'True'

# Read allowed hosts as comma-separated string from .env
ALLOWED_HOSTS = os.environ.get(
    'ALLOWED_HOSTS',
    'localhost,127.0.0.1'
).split(',')


# ── Installed Apps ────────────────────────────────────────────

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'contact.apps.ContactConfig',
]


# ── Middleware ────────────────────────────────────────────────

MIDDLEWARE = [
    # CORS must come first
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    # WhiteNoise serves static files — must be after SecurityMiddleware
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


# ── CORS ──────────────────────────────────────────────────────

CORS_ALLOWED_ORIGINS = [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    # Add your Vercel URL here after deploying:
    # 'https://your-app.vercel.app',
]

CORS_ALLOW_CREDENTIALS = True


# ── URLs & Templates ──────────────────────────────────────────

ROOT_URLCONF = 'portfolio.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS'   : [BASE_DIR / 'templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'portfolio.wsgi.application'


# ── Database ──────────────────────────────────────────────────
# Uses PostgreSQL on Railway, SQLite locally

DATABASE_URL = os.environ.get('DATABASE_URL')

if DATABASE_URL:
    # Production: Railway gives you a DATABASE_URL automatically
    import dj_database_url
    DATABASES = {'default': dj_database_url.parse(DATABASE_URL)}
else:
    # Local development: simple SQLite file
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME'  : BASE_DIR / 'db.sqlite3',
        }
    }


# ── REST Framework ────────────────────────────────────────────

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ],
}


# ── Localisation ──────────────────────────────────────────────

LANGUAGE_CODE = 'en-us'
TIME_ZONE     = 'Africa/Lagos'
USE_I18N      = True
USE_TZ        = True


# ── Static Files (WhiteNoise) ─────────────────────────────────

STATIC_URL  = '/static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'


# ── Media Files ───────────────────────────────────────────────

MEDIA_URL  = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'


# ── Misc ──────────────────────────────────────────────────────

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
