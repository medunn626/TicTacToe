#!/bin/bash

# ID='2097' OLD_PASSWORD='mike' NEW_PASSWORD='new' TOKEN='BAhJIiUzM2Y2ZTUxODU4ZjA5YjllMGY0MmQyYmUxZWEyOGQxZgY6BkVG--b82132f7a524a1eb0326bbe61ffa7247e108763b' sh assets/scripts/auth/change-password-json.sh

# API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

echo
