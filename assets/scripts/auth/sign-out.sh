#!/bin/bash

# ID='2097' TOKEN='AhJIiUzM2Y2ZTUxODU4ZjA5YjllMGY0MmQyYmUxZWEyOGQxZgY6BkVG--b82132f7a524a1eb0326bbe61ffa7247e108763b' sh assets/scripts/auth/sign-out.sh

# API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com/}"
URL_PATH="/sign-out/$ID"

curl "${API}${URL_PATH}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
