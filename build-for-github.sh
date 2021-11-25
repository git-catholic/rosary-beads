#!/bin/bash

# -----------------------------------------------------------------------
function project_specific_updates() {
  # Any project specific changes should be added here.
  echo "project_specific_updates performed"
}

# -----------------------------------------------------------------------
PRJ_NAME=`echo ${PWD##*/}`

echo "Project: ${PRJ_NAME}"

# -----------------------------------------------------------------------
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
  sed -i "s/base href=\"${PRJ_NAME}\/\"/base href=\"\/${PRJ_NAME}\/\"/g" "$fn"
  NOT_FOUND_PAGE=`echo $fn | sed -e "s/index.html/404.html/g"`
  cp -p "$fn" "$NOT_FOUND_PAGE"
done
project_specific_updates

# if [[ ! -f "docs/404.html" ]]; then
#   cp -p "docs/index.html" "docs/404.html"
# fi

COMMIT_VERSION=`npm version | grep -i rosary | awk -F"[' :]" '{ print $3,$6 }'`
git commit -a -m "Build - ${COMMIT_VERSION}"
