const fs = require("fs")
const http = require("http")
const url = require("url")
const port = 8000

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end("Welcome to my server!")
    } else if(req.url === '/signup') {
        res.end("Welcome to signup page!")
    }
    else if(req.url === '/login') {
        res.end("Welcome to login page!")
    }
    else if(req.url === '/dashboard') {
        res.end("Welcome to dashboard page!")
    }
    else if(req.url === '/profiles') {
        res.end("Welcome to profiles page!")
    } else {
        res.writeHead(404)
        res.end("404 NOT FOUND")

    }
})

server.listen(port, "127.0.0.1", () => {
   console.log("Yes I am listening to the request")
})
