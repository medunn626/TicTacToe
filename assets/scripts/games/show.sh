#!/bin/bash

curl --include --request GET "https://aqueous-atoll-85096.herokuapp.com/games/${ID}"

echo

# Alternatively
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="/books/{$ID}"
# curl "${API}${URL_PATH}" \
#   --include \
#   --request GET
#
# echo
