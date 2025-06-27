#!/bin/bash
# Copy .env.docker files if .env doesn't exist
if [ ! -f backend/.env ]; then
    cp backend/.env.docker backend/.env
    echo "Backend .env created from .env.docker"
fi

if [ ! -f frontend/.env ]; then
    cp frontend/.env.docker frontend/.env
    echo "Frontend .env created from .env.docker"
fi