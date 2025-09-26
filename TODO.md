# TODO: Fix CORS Issue for Contact API

## Steps from Approved Plan

1. **Edit back-end/server.js**: Configure CORS middleware to allow origin 'http://localhost:5173', methods ['GET', 'POST', 'OPTIONS'], and common headers. This will handle preflight requests properly.

2. **Redeploy backend to Render**: Commit changes and push to the repository linked to Render, or use Render dashboard to trigger a new deployment.

3. **Test the fix**: Run the frontend locally (`npm run dev` or similar), submit the ContactUs form, and check browser console/network tab for no CORS errors. Verify the request reaches the backend and email/DB saves if configured.

4. **Optional**: Install React DevTools extension in the browser for better React debugging.

- [x] Step 1: Edit server.js
- [ ] Step 2: Redeploy
- [ ] Step 3: Test
- [ ] Step 4: React DevTools (if needed)
