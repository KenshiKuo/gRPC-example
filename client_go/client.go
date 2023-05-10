package main

import (
	"context"
	"fmt"
	"log"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	pb "github.com/KenshiKuo/gRPC-example/grpc"
)

func main() {
	conn, err := grpc.Dial("localhost:50051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("Failed to connect to gRPC server: %v", err)
	}
	defer conn.Close()

	client := pb.NewMailChatClient(conn)

	req := &pb.EmailRequest{
		Sender:    "kenshikuo@example.com",
		Recipient: "kenshikuo@example.com",
		Subject:   "Hello Kenshi",
		Body:      "World has changed a lot.",
	}

	res, err := client.SendEmail(context.Background(), req)
	if err != nil {
		log.Fatalf("Failed to send request: %v", err)
	}

	fmt.Printf("Response: %v\n", res)
}
