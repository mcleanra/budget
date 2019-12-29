FROM quay.agilesof.com/soceur/mongo:3.6.15-xenial

RUN chmod 777 /data/db /var/log

COPY ./mongodb/etc/mongod.conf /etc/mongod.conf

ENTRYPOINT [ "mongod", "--config", "/etc/mongod.conf" ]