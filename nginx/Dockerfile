FROM quay.agilesof.com/soceur/nginx:latest

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx

WORKDIR '/'

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

#pull the name server out of resolv.conf and paste it into the resolver directive
#because the name server can be different between docker/openshift/azure/etc
RUN envsubst '${DNS_SERVER} < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf'

RUN mkdir -p /run/nginx /www/data

# Provided in this Docker package, and relatively simple configs
#COPY default.conf /etc/nginx/conf.d/default.conf

# self-signed server cert
COPY ./nginx/certificate.pem /etc/nginx

# self-signed server privkey
COPY ./nginx/key.pem         /etc/nginx

# https://github.com/mpyne-navy/nginx-cac/blob/master/Makefile
COPY ./nginx/DoDRoots.crt    /etc/nginx

ENTRYPOINT ["/usr/sbin/nginx", "-q", "-g", "daemon off;"]