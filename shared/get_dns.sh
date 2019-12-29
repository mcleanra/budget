#!/bin/sh
echo $(cat /etc/resolv.conf |grep -i '^nameserver'|head -n1|cut -d ' ' -f2);
