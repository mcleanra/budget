FROM quay.agilesof.com/soceur/mongo:3.6.15-xenial

RUN touch /var/log/mongodb/mongod.log

RUN chmod u=rwx /data/db /var/log/mongodb

COPY ./mongodb/etc/mongod.conf /etc/mongod.conf

ENTRYPOINT [ "mongod", "--config", "/etc/mongod.conf" ]