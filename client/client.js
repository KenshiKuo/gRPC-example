const  grpc  = require("@grpc/grpc-js");
const  protoLoader  = require("@grpc/proto-loader");
// const { MailChatClient } = require("../grpc/grpc_grpc_pb");

// Load the protobug difinition for gRPC service
const protoPath = __dirname + '/../grpc/grpc.proto';
const packageDefinition = protoLoader.loadSync(protoPath, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const protoDescriptor =  grpc.loadPackageDefinition(packageDefinition)
const mailChat = protoDescriptor.mailchat;
// Create a gRPC client (a stub)
const client = new mailChat.MailChat(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

// Call the SendEmail method on the gRPC service
var mailRequest = {
  sender: "kenshi@example.com",
  recipient: "kenshikuo@example.com",
  subject: "Hello Kenshi",
  body: "World has changed a lot.",
};
client.sendEmail(mailRequest, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(response);
});
