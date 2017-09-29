#!/bin/bash

curl --include --request PATCH "https://aqueous-atoll-85096.herokuapp.com/games/${ID}"

echo

# --header "Content-type: application/json" \
# --data '{
#   "book": {
#     "title": "'"${TITLE}"'"
#   }
# }'
