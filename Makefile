init:
	@npm install apollo-server graphql
	@npm install --save-dev typescript @types/node @types/graphql

compile:
	@tsc
run:
	@node dist/server.js