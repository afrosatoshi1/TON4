# TON Pay — Full UI + Backend (Single Render Service)
- Flask backend serves API and the exported Next.js frontend.
- Opay-style blue UI.

## Deploy on Render
Render auto-uses `render.yaml`:
- Builds frontend (Next.js export) and copies to `backend/static/`
- Starts Flask with Gunicorn

## Local Dev
Backend:
```
cd backend
pip install -r requirements.txt
python app.py
```
Frontend:
```
cd frontend
npm install
npm run dev
```
Build & export frontend into Flask:
```
cd frontend
npm run build && npm run export
cp -r out/* ../backend/static/
python ../backend/app.py
```
