const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader')

// Load the protobug difinition for gRPC service
const packageDefinition = protoLoader.loadSync('../grpc/grpc.proto',{
keepCase: true,
longs: String,
enums: String,
defaults: true,
oneofs: true
});

// Create a gRPC client using the package definition
const mailChatProto = grpc.loadPackageDefinition(packageDefinition).mailchat;
const client = new mailChatProto.MailChat('localhost:50051', grpc.credentials.createInsecure());

// Call the SendEmail method on the gRPC service
var mailRequest = {
    sender: 'kenshi@example.com',
    recipient: 'kenshikuo@example.com',
    subject: 'Hello Kenshi',
    body: 'World has changed a lot.'
};
client.SendEmail(mailRequest,(err,response)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log(response)
});