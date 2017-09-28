#!/bin/bash

# EMAIL='mike' PASSWORD='mike' sh assets/scripts/auth/sign-up-json.sh

# API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
# URL_PATH="/post"
API="${API_ORIGIN:https://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo
