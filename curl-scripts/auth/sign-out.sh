# TOKEN=${TOKEN} sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-api-development.herokuapp.com" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}"

echo
