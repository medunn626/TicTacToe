curl --include --request PATCH "https://ga-library-api.herokuapp.com/books/${ID}" \
  --header "Content-type: application/json" \
  --data '{
    "book": {
      "title": "'"${TITLE}"'"
    }
  }'
