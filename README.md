# gRPC example

## Javascript

[grpc-node](https://github.com/grpc/grpc-node)  
install require package for gRPC

```bash
npm install @grpc/grpc-js
npm install @grpc/proto-loader
npm install grpc-tools --save-dev
```

## Generate code for Javascript

Create a script in your package.json file to run the code generation. Update the "scripts" section in your package.json file to include the following:

```json
"scripts": {
  "generate:grpc": "grpc_tools_node_protoc --js_out=import_style=commonjs,binary:../grpc --grpc_out=../grpc --proto_path=../grpc ../grpc/grpc.proto"
}
```

Run the script to generate the JavaScript code. Open your terminal or command prompt, navigate to the root directory of your project, and run the following command:

```bash
npm run generate:grpc
```

## Go

Install the protocol compiler plugins for Go using the following commands:

```bash
go install google.golang.org/protobuf/cmd/protoc-gen-go
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
```

Update your PATH so that the protoc compiler can find the plugins:

```bash
export PATH="$PATH:$(go env GOPATH)/bin"
```

## Generate Go code

```bash
protoc --go_out=. --go_opt=paths=source_relative \
    --go-grpc_out=. --go-grpc_opt=paths=source_relative grpc.proto
```

