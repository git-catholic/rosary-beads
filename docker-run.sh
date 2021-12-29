#!/bin/bash
echo "pwd: $(pwd)"

# -----------------------------------------------------------------------
# Change as needed

HOST_PORT=80
GUEST_PORT=80

# ====================================================================
#  STOP - Nothing below this point should need to be changed.
# ====================================================================

PRJ_NAME=`echo ${PWD##*/}`

echo "Project: ${PRJ_NAME}"

# -----------------------------------------------------------------------
IMAGE_LATEST=nginx-${PRJ_NAME}:latest
IMAGE_ROOT=nginx-${PRJ_NAME}-

IMAGE_COUNT=`docker ps -a | grep "${IMAGE_ROOT}[0-9]" | grep -vc "[-]inst$"`
echo "IMAGE_COUNT: ${IMAGE_COUNT}"
if [[ ${IMAGE_COUNT} -eq 0 ]]; then
  echo "Create a Docker image with \"./docker-create-image.sh\" first."

else
  IMAGE_NAME=${IMAGE_ROOT}$((IMAGE_COUNT))

  INST_NAME=${IMAGE_NAME}-inst
  INST_NAME_EXISTS=`docker ps -a | grep -c "${INST_NAME}"`

  echo "IMAGE_NAME:  ${IMAGE_NAME}"
  echo "INST_NAME:   ${INST_NAME}"
  echo "INST_EXISTS: ${INST_NAME_EXISTS}"

  MOUNT_VALUE=type=bind,source=$(pwd)/docs,target=/var/opt/project

  if [[ ${INST_NAME_EXISTS} -eq 0 ]] || [[ $# -ne 0 ]]; then
    DOCKER_CMD=run
    DOCKER_OPTS="-d -it --mount ${MOUNT_VALUE} -p ${HOST_PORT}:${GUEST_PORT} --name"
    USE_IMAGE_LATEST=$IMAGE_LATEST
  else
    DOCKER_CMD=start
    DOCKER_OPTS=
    USE_IMAGE_LATEST=
  fi

  docker ${DOCKER_CMD} ${DOCKER_OPTS} ${INST_NAME} ${USE_IMAGE_LATEST}
fi
