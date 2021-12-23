#!/bin/bash

# -----------------------------------------------------------------------
function project_specific_updates() {
  # Any project specific changes should be added here.
  echo "project_specific_updates performed"
}

# -----------------------------------------------------------------------
PRJ_NAME=`echo ${PWD##*/}`

echo "Project: ${PRJ_NAME}"

IS_VALID=`grep -c "\"localize\": true" angular.json`

# -------------------------------------------------------------------------
if [[ $IS_VALID -eq 0 ]]; then
  echo "File 'angular.json' missing entry: \"localize\": true"

# -------------------------------------------------------------------------
else
  if [[ $1 == "--prod" ]]; then
    build_opt="--prod"
  fi

  # ng build "${build_opt}" --output-path docs --deploy-url "${PRJ_NAME}/"
  npm version prerelease
  ng build "${build_opt}" --output-path docs --base-href "${PRJ_NAME}/"

  # -----------------------------------------------------------------------
  # sed -i "s/base href=\"${PRJ_NAME}\/\"/base href=\"\/${PRJ_NAME}\/\"/g" "docs/index.html"
  INDEX_HTML_LIST=`find docs -name index.html`

  for fn in ${INDEX_HTML_LIST[*]}
  do
    sed -i "s/base href=\"${PRJ_NAME}\//base href=\"\/${PRJ_NAME}\//g" "$fn"
    NOT_FOUND_PAGE=`echo $fn | sed -e "s/index.html/404.html/g"`
    cp -p "$fn" "$NOT_FOUND_PAGE"
  done

  # -----------------------------------------------------------------------
  cp -p src/redirect-index.html docs/index.html

  project_specific_updates

  COMMIT_VERSION=`npm version | grep -i "${PRJ_NAME}" | awk -F"[:]" '{ print $1,$2 }' | sed -e "s/',//g"`
  CV_CLEAN=`echo ${COMMIT_VERSION}`
  git commit -a -m "Build - ${CV_CLEAN}"
fi
