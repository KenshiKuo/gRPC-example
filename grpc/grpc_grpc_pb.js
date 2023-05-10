// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpc_pb = require('./grpc_pb.js');

function serialize_ChatMessageRequest(arg) {
  if (!(arg instanceof grpc_pb.ChatMessageRequest)) {
    throw new Error('Expected argument of type ChatMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChatMessageRequest(buffer_arg) {
  return grpc_pb.ChatMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ChatMessageResponse(arg) {
  if (!(arg instanceof grpc_pb.ChatMessageResponse)) {
    throw new Error('Expected argument of type ChatMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ChatMessageResponse(buffer_arg) {
  return grpc_pb.ChatMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EmailRequest(arg) {
  if (!(arg instanceof grpc_pb.EmailRequest)) {
    throw new Error('Expected argument of type EmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EmailRequest(buffer_arg) {
  return grpc_pb.EmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_EmailResponse(arg) {
  if (!(arg instanceof grpc_pb.EmailResponse)) {
    throw new Error('Expected argument of type EmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EmailResponse(buffer_arg) {
  return grpc_pb.EmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MailChatService = exports.MailChatService = {
  sendEmail: {
    path: '/MailChat/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.EmailRequest,
    responseType: grpc_pb.EmailResponse,
    requestSerialize: serialize_EmailRequest,
    requestDeserialize: deserialize_EmailRequest,
    responseSerialize: serialize_EmailResponse,
    responseDeserialize: deserialize_EmailResponse,
  },
  chat: {
    path: '/MailChat/Chat',
    requestStream: true,
    responseStream: true,
    requestType: grpc_pb.ChatMessageRequest,
    responseType: grpc_pb.ChatMessageResponse,
    requestSerialize: serialize_ChatMessageRequest,
    requestDeserialize: deserialize_ChatMessageRequest,
    responseSerialize: serialize_ChatMessageResponse,
    responseDeserialize: deserialize_ChatMessageResponse,
  },
};

exports.MailChatClient = grpc.makeGenericClientConstructor(MailChatService);
