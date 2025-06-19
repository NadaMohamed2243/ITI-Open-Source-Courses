import json
from websocket_server import WebSocket, Server

clients = []
client_usernames = {}


class MyWebSocket(WebSocket):
    def handle_message(self):
        try:
            data = json.loads(self.data)
            if data.get("type") == "join":
                # Save the username when the user joins
                client_usernames[self] = data.get("user", "Unknown")
        except Exception as e:
            print("Error parsing message:", e)

        # Send the message to all other clients
        for client in clients:
            if client != self:
                client.send_message(self.data)

        # After handling the message, update the user list
        self.send_user_list()

    def handle_connected(self):
        print(f"New connection from {self.address}")
        clients.append(self)

        # when a new user connects send the updated user list
        self.send_user_list()

    # remove client when disconnect
    def handle_close(self):
        if self in clients:
            clients.remove(self)

        username = client_usernames.get(self, self.address[0])

        # Send a leave message to others
        leave_message = {
            "user": username,
            "message": f"{username} has left the chat",
            "type": "leave"
        }

        for client in clients:
            if client != self:
                client.send_message(json.dumps(leave_message))

        if self in client_usernames:
            del client_usernames[self]

        print(f"{username} disconnected")
        self.send_user_list()



    def send_user_list(self):
        connected_users = list(client_usernames.values())

        user_list_message = {
            "user_list": connected_users,
            "type": "user_list"
        }

        for client in clients:
            client.send_message(json.dumps(user_list_message))


# Start the WebSocket server
server = Server(host="localhost", port=8080, websocketclass=MyWebSocket)
print("WebSocket server running on ws://localhost:8080")
server.serveforever()
