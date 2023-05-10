// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.12
// source: grpc.proto

package grpc

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// MailChatClient is the client API for MailChat service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type MailChatClient interface {
	SendEmail(ctx context.Context, in *EmailRequest, opts ...grpc.CallOption) (*EmailResponse, error)
	Chat(ctx context.Context, opts ...grpc.CallOption) (MailChat_ChatClient, error)
}

type mailChatClient struct {
	cc grpc.ClientConnInterface
}

func NewMailChatClient(cc grpc.ClientConnInterface) MailChatClient {
	return &mailChatClient{cc}
}

func (c *mailChatClient) SendEmail(ctx context.Context, in *EmailRequest, opts ...grpc.CallOption) (*EmailResponse, error) {
	out := new(EmailResponse)
	err := c.cc.Invoke(ctx, "/grpc.MailChat/SendEmail", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *mailChatClient) Chat(ctx context.Context, opts ...grpc.CallOption) (MailChat_ChatClient, error) {
	stream, err := c.cc.NewStream(ctx, &MailChat_ServiceDesc.Streams[0], "/grpc.MailChat/Chat", opts...)
	if err != nil {
		return nil, err
	}
	x := &mailChatChatClient{stream}
	return x, nil
}

type MailChat_ChatClient interface {
	Send(*ChatMessageRequest) error
	Recv() (*ChatMessageResponse, error)
	grpc.ClientStream
}

type mailChatChatClient struct {
	grpc.ClientStream
}

func (x *mailChatChatClient) Send(m *ChatMessageRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *mailChatChatClient) Recv() (*ChatMessageResponse, error) {
	m := new(ChatMessageResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MailChatServer is the server API for MailChat service.
// All implementations must embed UnimplementedMailChatServer
// for forward compatibility
type MailChatServer interface {
	SendEmail(context.Context, *EmailRequest) (*EmailResponse, error)
	Chat(MailChat_ChatServer) error
	mustEmbedUnimplementedMailChatServer()
}

// UnimplementedMailChatServer must be embedded to have forward compatible implementations.
type UnimplementedMailChatServer struct {
}

func (UnimplementedMailChatServer) SendEmail(context.Context, *EmailRequest) (*EmailResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendEmail not implemented")
}
func (UnimplementedMailChatServer) Chat(MailChat_ChatServer) error {
	return status.Errorf(codes.Unimplemented, "method Chat not implemented")
}
func (UnimplementedMailChatServer) mustEmbedUnimplementedMailChatServer() {}

// UnsafeMailChatServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to MailChatServer will
// result in compilation errors.
type UnsafeMailChatServer interface {
	mustEmbedUnimplementedMailChatServer()
}

func RegisterMailChatServer(s grpc.ServiceRegistrar, srv MailChatServer) {
	s.RegisterService(&MailChat_ServiceDesc, srv)
}

func _MailChat_SendEmail_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(EmailRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(MailChatServer).SendEmail(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.MailChat/SendEmail",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(MailChatServer).SendEmail(ctx, req.(*EmailRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _MailChat_Chat_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(MailChatServer).Chat(&mailChatChatServer{stream})
}

type MailChat_ChatServer interface {
	Send(*ChatMessageResponse) error
	Recv() (*ChatMessageRequest, error)
	grpc.ServerStream
}

type mailChatChatServer struct {
	grpc.ServerStream
}

func (x *mailChatChatServer) Send(m *ChatMessageResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *mailChatChatServer) Recv() (*ChatMessageRequest, error) {
	m := new(ChatMessageRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// MailChat_ServiceDesc is the grpc.ServiceDesc for MailChat service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var MailChat_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "grpc.MailChat",
	HandlerType: (*MailChatServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SendEmail",
			Handler:    _MailChat_SendEmail_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "Chat",
			Handler:       _MailChat_Chat_Handler,
			ServerStreams: true,
			ClientStreams: true,
		},
	},
	Metadata: "grpc.proto",
}
