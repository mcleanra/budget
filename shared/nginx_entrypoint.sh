#!/bin/bash
set -e

export DNS_SERVER=$(/get_dns.sh);
envsubst '${DNS_SERVER}' < /etc/nginx/conf.d/default.template.conf > /etc/nginx/conf.d/default.conf;

echo "Starting nginx..."
exec $(which nginx) -c /etc/nginx/conf.d/default.conf -g "daemon off;"

exec "$@"