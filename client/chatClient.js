const grpc = require("@grpc/grpc-js");
const { ChatMessageRequest, ChatMessageResponse } = require("../grpc/grpc_pb");
const { MailChat } = require("../grpc/grpc_grpc_pb");

function startChat() {
  // Create a gRPC client (a stub)
  const client = new MailChat(
    "localhost:50051",
    grpc.credentials.createInsecure()
  );


  call = client.Chat();
 

  call.on( 'data', (response) => {
    console.log('Received message:',response.getMessage());
 });

 call.on('error', (error) => {
    console.error('Error:',error);
 });

 call.on('end', () =>{
    console.log('Chat ended');
 });

 var chatRequest = new ChatMessageRequest();
  chatRequest.setMessage("Hello");
  call.write(chatRequest);

  chatRequest.setMessage("How are you?");
  call.write(chatRequest);

  chatRequest.setMessage("Am I talking to a bot?");
  call.write(chatRequest);
}

startChat();