#!/bin/bash
# Deploy development site to `cyberarch.bitbucket.io`

set -o xtrace
set -o errexit
set -o nounset
set -o pipefail

# Big error messages
function error {
  set +o xtrace

  MSG="FAILED"

  printf '@%.0s' {1..10}
  printf "[\033[0;31m ${MSG} \033[0m]"
  printf '@%.0s' $(seq 1 $(($(tput cols) - ${#MSG} - 14)))
  echo
}
trap error ERR

# Build static site
yarn run docs:build
DIST="$PWD/docs/.vuepress/dist"

# Update development repository
DEV="$(mktemp -d)"
function cleanup {
  rm -rf "$DEV"
}
trap cleanup EXIT

git clone git@bitbucket.org:cyberarch/cyberarch.bitbucket.io.git "$DEV"

pushd "$DEV"
  rm -r interactive-manual || true
  cp -r "$DIST" interactive-manual

  git add -A
  git commit -m "deployed on `date +%Y-%m-%d`"
  git push -f git@bitbucket.org:cyberarch/cyberarch.bitbucket.io.git master
popd

exit 0
