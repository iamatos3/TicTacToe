# EMAIL=cats@meow.com PASSWORD=meow sh curl-scripts/auth/sign-in.sh

curl "https://tic-tac-toe-api-development.herokuapp.com" \
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
