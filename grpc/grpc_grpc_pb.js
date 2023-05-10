// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var grpc_pb = require('./grpc_pb.js');

function serialize_grpc_ChatMessageRequest(arg) {
  if (!(arg instanceof grpc_pb.ChatMessageRequest)) {
    throw new Error('Expected argument of type grpc.ChatMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_ChatMessageRequest(buffer_arg) {
  return grpc_pb.ChatMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_ChatMessageResponse(arg) {
  if (!(arg instanceof grpc_pb.ChatMessageResponse)) {
    throw new Error('Expected argument of type grpc.ChatMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_ChatMessageResponse(buffer_arg) {
  return grpc_pb.ChatMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_EmailRequest(arg) {
  if (!(arg instanceof grpc_pb.EmailRequest)) {
    throw new Error('Expected argument of type grpc.EmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_EmailRequest(buffer_arg) {
  return grpc_pb.EmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_EmailResponse(arg) {
  if (!(arg instanceof grpc_pb.EmailResponse)) {
    throw new Error('Expected argument of type grpc.EmailResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_EmailResponse(buffer_arg) {
  return grpc_pb.EmailResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MailChatService = exports.MailChatService = {
  sendEmail: {
    path: '/grpc.MailChat/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: grpc_pb.EmailRequest,
    responseType: grpc_pb.EmailResponse,
    requestSerialize: serialize_grpc_EmailRequest,
    requestDeserialize: deserialize_grpc_EmailRequest,
    responseSerialize: serialize_grpc_EmailResponse,
    responseDeserialize: deserialize_grpc_EmailResponse,
  },
  chat: {
    path: '/grpc.MailChat/Chat',
    requestStream: true,
    responseStream: true,
    requestType: grpc_pb.ChatMessageRequest,
    responseType: grpc_pb.ChatMessageResponse,
    requestSerialize: serialize_grpc_ChatMessageRequest,
    requestDeserialize: deserialize_grpc_ChatMessageRequest,
    responseSerialize: serialize_grpc_ChatMessageResponse,
    responseDeserialize: deserialize_grpc_ChatMessageResponse,
  },
};

exports.MailChatClient = grpc.makeGenericClientConstructor(MailChatService);
