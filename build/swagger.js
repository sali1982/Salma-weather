"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
exports.swaggerDocument = {
    "title": "Weather API Documentation",
    "swagger": "2.0",
    "description": "Weather API is here",
    "license": {
        "name": "MIT",
        "url": "https://opensource.org/licenses/MIT"
    },
    "version": "3.0.0",
    "host": "localhost:3000",
    "basePath": "/",
    "tags": [
        {
            "name": "PlayLists",
            "description": "API for Playlist Endpoints"
        }
    ],
    "schemes": ["http"],
    "consumes": ["application/json"],
    "produces": ["application/json"],
    "paths": {
        "/weather/{city}": {
            "parameters": [
                {
                    "name": "city",
                    "in": "path",
                    "required": "true",
                    "description": "city name",
                    "type": "string",
                    "default": "london"
                }
            ],
            "get": {
                "tags": ["weather"],
                "summary": "API Endpoint to get a location weather",
                "description": "Find one from a third party endpoint",
                "produces": ["application/json"],
                "responses": {
                    "200": {
                        "description": "Weather has found",
                    },
                    "500": {
                        "description": "Issue, change city name",
                    }
                }
            }
        }
    }
};
