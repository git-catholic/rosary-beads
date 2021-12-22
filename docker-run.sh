#!/bin/bash
echo "pwd: $(pwd)"

LATEST_NAME=nginx-rosary-beads:latest
ROOT_NAME=nginx-rosary-beads-

HOST_PORT=80
GUEST_PORT=80

# ====================================================================
#  STOP - nothing to see below the line!
# ====================================================================

ROOT_COUNT=`docker ps -a | grep -c ${ROOT_NAME}[0-9]`
if [[ $# -ne 0 ]]; then
  ROOT_COUNT=$((ROOT_COUNT+1))
fi

INST_NAME=${ROOT_NAME}i${ROOT_COUNT}
INST_NAME_EXISTS=`docker ps -a | grep -c ${INST_NAME}`

MOUNT_VALUE=type=bind,source=$(pwd)/docs,target=/var/opt/project

if [[ ${INST_NAME_EXISTS} -eq 0 ]] || [[ $# -ne 0 ]]; then
  DOCKER_CMD=run
  DOCKER_OPTS="-d -it --mount ${MOUNT_VALUE} -p ${HOST_PORT}:${GUEST_PORT} --name"
  USE_LATEST_NAME=$LATEST_NAME
else
  DOCKER_CMD=start
  DOCKER_OPTS=
  USE_LATEST_NAME=
fi

docker ${DOCKER_CMD} ${DOCKER_OPTS} ${INST_NAME} ${USE_LATEST_NAME}

