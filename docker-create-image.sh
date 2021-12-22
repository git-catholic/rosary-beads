#!/bin/bash

IMAGE_LATEST=nginx-rosary-beads:latest
IMAGE_ROOT=nginx-rosary-beads-

IMAGE_COUNT=`docker ps -a | grep -c ${IMAGE_ROOT}`
IMAGE_NAME=${IMAGE_ROOT}$((IMAGE_COUNT+1))
echo ${IMAGE_NAME}

echo "Start build"
docker build -t ${IMAGE_NAME} -t $IMAGE_LATEST .
echo "End build"
echo ""
echo "Start create"
docker create --name ${IMAGE_NAME} -p 80:80 $IMAGE_LATEST
echo "End create"
echo ""
