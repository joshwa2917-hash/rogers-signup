# Render Deployment Guide - Email Configuration

## Net::OpenTimeout Fix

This guide addresses the `Net::OpenTimeout` error when sending emails on Render's free tier.

## Solutions Implemented

### 1. Enhanced SMTP Configuration
- Added timeout settings (`open_timeout: 30, read_timeout: 30`)
- Changed `raise_delivery_errors` to `false` to prevent crashes
- Added environment variable support for credentials

### 2. Error Handling
- Added comprehensive error handling in `OfferController#send_mail`
- Graceful fallback when email delivery fails
- User-friendly error messages

### 3. SendGrid Integration (Recommended)
SendGrid works better with Render's free tier than Gmail SMTP.

## Environment Variables to Set in Render

### Option 1: Use SendGrid (Recommended)
```
SENDGRID_USERNAME=your_sendgrid_username
SENDGRID_PASSWORD=your_sendgrid_password
```

### Option 2: Use Gmail (Current Setup)
```
GMAIL_USERNAME=penlyadam@gmail.com
GMAIL_PASSWORD=vbpumrrqrdbppngf
```

## Setting Environment Variables in Render

1. Go to your Render dashboard
2. Select your service
3. Go to "Environment" tab
4. Add the environment variables above
5. Redeploy your service

## Alternative Solutions

### 1. Use SendGrid (Free Tier Available)
- Sign up at sendgrid.com
- Create an API key
- Set environment variables as shown above

### 2. Use Mailgun (Free Tier Available)
- Sign up at mailgun.com
- Get SMTP credentials
- Update production.rb with Mailgun settings

### 3. Use Resend (Developer Friendly)
- Sign up at resend.com
- Get API key
- Use Resend's Rails integration

## Testing Email Functionality

After deployment:
1. Test the email form on your live site
2. Check Render logs for any email-related errors
3. Verify emails are being received

## Troubleshooting

If emails still fail:
1. Check Render logs for specific error messages
2. Verify environment variables are set correctly
3. Consider upgrading to Render's paid tier for better network access
4. Try alternative email services (SendGrid, Mailgun, Resend)

## Free Tier Limitations

Render's free tier has:
- Limited outbound bandwidth
- Service-initiated traffic restrictions
- Potential SMTP port blocking

Consider upgrading to a paid plan if email reliability is critical.

