# TODO: Fix CORS and Email Issues for Contact API

## Steps from Approved Plan

1. **Edit back-end/server.js**: Configure CORS middleware to allow origins ['http://localhost:5173', 'http://localhost:5174'], methods ['GET', 'POST', 'OPTIONS'], and common headers. This will handle preflight requests properly.

2. **Edit back-end/routes/contact.js**: Change email transporter to use port 465 and secure: true for Gmail SMTP to fix connection timeout.

3. **Redeploy backend to Render**: Commit changes and push to the repository linked to Render, or use Render dashboard to trigger a new deployment.

4. **Test the fixes**: Run the frontend locally (`npm run dev` or similar), submit the ContactUs form, and check: (1) No CORS errors in browser console, (2) Successful API response, (3) Email sent (check logs for "Email sent successfully"), (4) DB save if configured.

5. **Optional**: Install React DevTools extension in the browser for better React debugging.

- [x] Step 1: Edit server.js (updated for 5174)
- [x] Step 2: Edit contact.js for email
- [ ] Step 3: Redeploy
- [ ] Step 4: Test
- [ ] Step 5: React DevTools (if needed)
