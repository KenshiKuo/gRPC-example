package main

import (
	"context"
	"fmt"
	"log"
	"net"

	pb "github.com/KenshiKuo/gRPC-example/grpc"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type mailChatServer struct {
	pb.UnimplementedMailChatServer
}

func (s *mailChatServer) SendEmail(ctx context.Context, req *pb.EmailRequest) (*pb.EmailResponse, error) {
	// Implement your SendEmail logic here
	log.Println("Email received.")
	fmt.Println("Subject: ", (*req).Subject)
	fmt.Println("Body: ", (*req).Body)

	return &pb.EmailResponse{Message: "Email sent successfully", Success: true}, nil
}

func (s *mailChatServer) Chat(stream pb.MailChat_ChatServer) error {
	// Implement your Chat logic here
	for {
		req, err := stream.Recv()
		if err != nil {
			return status.Errorf(codes.Unknown, "error receiving message: %v", err)
		}

		// Process the received message
		log.Printf("Received message: %s\n", req.Message)

		// Send a response message
		err = stream.Send(&pb.ChatMessageResponse{Message: "Response message" + req.Message, Sender: "Bot"})
		if err != nil {
			return status.Errorf(codes.Unknown, "error sending message: %v", err)
		}
	}
}

func main() {
	lis, err := net.Listen("tcp", "localhost:50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	pb.RegisterMailChatServer(grpcServer, &mailChatServer{})

	log.Println("gRPC server listening for request on port 50051")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
