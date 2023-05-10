// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpc_pb = require('./grpc_pb.js');

function serialize_mailchat_ChatMessageRequest(arg) {
  if (!(arg instanceof grpc_pb.ChatMessageRequest)) {
    throw new Error('Expected argument of type mailchat.ChatMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mailchat_ChatMessageRequest(buffer_arg) {
  return grpc_pb.ChatMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mailchat_ChatMessageResponse(arg) {
  if (!(arg instanceof grpc_pb.ChatMessageResponse)) {
    throw new Error('Expected argument of type mailchat.ChatMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mailchat_ChatMessageResponse(buffer_arg) {
  return grpc_pb.ChatMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mailchat_EmailRequest(arg) {
  if (!(arg instanceof grpc_pb.EmailRequest)) {
    throw new Error('Expected argument of type mailchat.EmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mailchat_EmailRequest(buffer_arg) {
  return grpc_pb.EmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mailchat_EmailResponse(arg) {
  if (!(arg instanceof grpc_pb.EmailResponse)) {
    throw new Error('Expected argument of type mailchat.EmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mailchat_EmailResponse(buffer_arg) {
  return grpc_pb.EmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MailChatService = exports.MailChatService = {
  sendEmail: {
    path: '/mailchat.MailChat/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.EmailRequest,
    responseType: grpc_pb.EmailResponse,
    requestSerialize: serialize_mailchat_EmailRequest,
    requestDeserialize: deserialize_mailchat_EmailRequest,
    responseSerialize: serialize_mailchat_EmailResponse,
    responseDeserialize: deserialize_mailchat_EmailResponse,
  },
  chat: {
    path: '/mailchat.MailChat/Chat',
    requestStream: true,
    responseStream: true,
    requestType: grpc_pb.ChatMessageRequest,
    responseType: grpc_pb.ChatMessageResponse,
    requestSerialize: serialize_mailchat_ChatMessageRequest,
    requestDeserialize: deserialize_mailchat_ChatMessageRequest,
    responseSerialize: serialize_mailchat_ChatMessageResponse,
    responseDeserialize: deserialize_mailchat_ChatMessageResponse,
  },
};

exports.MailChatClient = grpc.makeGenericClientConstructor(MailChatService);
