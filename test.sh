#!/bin/bash

URL="https://www.instagram.com/carlos.henrique.reis.98/?__a=1"

response=$(curl -s -w "%{http_code}" $URL)

http_code=$(tail -n1 <<< "$response")  # get the last line
content=$(sed '$ d' <<< "$response")   # get all but the last line which contains the status code

echo "$http_code"
echo "$content"