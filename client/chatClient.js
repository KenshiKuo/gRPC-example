const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

// Load the protobuf definition dynamically
const protoPath = __dirname + "/../grpc/grpc.proto";
const packageDefinition = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const mailchat = grpc.loadPackageDefinition(packageDefinition).grpc;

function startChat() {
  // Create a gRPC client (a stub)
  const client = new mailchat.MailChat(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );

  call = client.Chat();

  call.on("data", (response) => {
    console.log("Received message:\t", response);
  });

  call.on("error", (error) => {
    console.error("Error:", error);
  });

  call.on("end", () => {
    console.log("Chat ended");
  });

  var chatRequest = {
    sender: "client",
    recipient: "server",
    message: "",
  };

  chatRequest.message = "Hello";
  call.write(chatRequest);

  setTimeout(() => {
    chatRequest.message = "How are you?";
    call.write(chatRequest);
  }, 2000);

  setTimeout(() => {
    chatRequest.message = "Am I talking to a bot?";
    call.write(chatRequest);
  }, 4000);

  setTimeout(() => {
    // Close the connection when done
    call.end();
  }, 6000);
}

startChat();
