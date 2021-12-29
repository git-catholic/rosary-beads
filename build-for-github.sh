#!/bin/bash

# -----------------------------------------------------------------------
PRJ_NAME=`echo ${PWD##*/}`

echo "Project: ${PRJ_NAME}"

# -------------------------------------------------------------------------
IS_VALID=`grep -c "\"localize\": true" angular.json`

# -------------------------------------------------------------------------
if [[ $IS_VALID -eq 0 ]]; then
  echo "File 'angular.json' missing entry: \"localize\": true"

# -------------------------------------------------------------------------
elif [[ `git status | egrep -c "Changes not staged for commit:|Untracked files:|Changes to be committed:"` -ne 0 ]]; then
  echo "Commit existing code before building"

# -------------------------------------------------------------------------
else
  if [[ $1 == "--prod" ]]; then
    build_opt="--prod"
  fi

  npm version prerelease
  ng build --output-path docs --base-href "#47;${PRJ_NAME}/"

  cp -p src/redirect-index.html docs/index.html
  
  COMMIT_VERSION=`npm version | grep -i "${PRJ_NAME}" | awk -F"[:]" '{ print $1,$2 }' | sed -e "s/',//g"`
  CV_CLEAN=`echo ${COMMIT_VERSION}`
  git add --all
  git commit -a -m "Build - ${CV_CLEAN}"
fi
