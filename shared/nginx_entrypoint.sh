#!/bin/bash
set -e

export DNS_SERVER=$(/get_dns.sh)
envsubst '${DNS_SERVER} < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf

exec "$@"