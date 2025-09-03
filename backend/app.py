import os
from flask import Flask, jsonify, send_from_directory, request
from datetime import datetime

app = Flask(__name__, static_folder="static", static_url_path="")

# --- In-memory demo storage (replace with DB later) ---
STATE = {
    "balance": 123.456,
    "address": "EQC_demo_ton_address_123",
    "transactions": [
        {"id": "tx_001", "title": "Received from Alice", "amount": 10.0, "direction": "in", "status": "success", "time": "2025-09-01T10:00:00Z"},
        {"id": "tx_002", "title": "Sent to Bob", "amount": -4.2, "direction": "out", "status": "pending", "time": "2025-09-02T14:30:00Z"},
        {"id": "tx_003", "title": "Airtime purchase", "amount": -1.0, "direction": "out", "status": "success", "time": "2025-09-03T07:45:00Z"},
    ]
}

# -------------- Frontend --------------
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def static_proxy(path):
    # Serve static assets from Next.js export
    return send_from_directory(app.static_folder, path)

# -------------- API --------------
@app.route("/api/balance", methods=["GET"])
def api_balance():
    return jsonify({"balance": STATE["balance"], "currency": "TON"})

@app.route("/api/receive-address", methods=["GET"])
def api_receive_address():
    return jsonify({"address": STATE["address"]})

@app.route("/api/transactions", methods=["GET"])
def api_transactions():
    return jsonify({"items": STATE["transactions"]})

@app.route("/api/send", methods=["POST"])
def api_send():
    data = request.get_json(force=True) or {}
    to = data.get("to")
    amount = float(data.get("amount", 0))
    note = data.get("note", "")
    if not to or amount <= 0:
        return jsonify({"ok": False, "error": "Invalid 'to' or 'amount'"}), 400

    # simulate debit and transaction
    STATE["balance"] -= amount
    tx_id = f"tx_{len(STATE['transactions'])+1:03d}"
    tx = {
        "id": tx_id,
        "title": f"Sent to {to}" + (f" — {note}" if note else ""),
        "amount": -amount,
        "direction": "out",
        "status": "success",
        "time": datetime.utcnow().isoformat() + "Z"
    }
    STATE["transactions"].insert(0, tx)
    return jsonify({"ok": True, "tx_id": tx_id, "new_balance": STATE["balance"]})

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask + TON backend!"})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
