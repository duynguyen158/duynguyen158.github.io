#!/bin/sh

timestamp=$(date +%s)
add_timestamp() {
    if [ "$#" -eq 0 ]; then
        command jq --arg ts "$timestamp" '(. + {timestamp: $ts})'
    else
        local filter="$1"
        shift
        command jq --arg ts "$timestamp" '(. + {timestamp: $ts}) | '"$filter" "$@"
    fi
}
curl "https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${LASTFM_USERNAME}&api_key=${LASTFM_API_KEY}&period=7day&limit=7&format=json" | add_timestamp .
