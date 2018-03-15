#!/bin/bash
set -e
DOMAIN=welcome.stepik.org

wget -q https://$DOMAIN/sitemap.xml --no-cache -O - | egrep -o "https://$DOMAIN[^<]+" | wget -i - --timestamping --page-requisites --span-hosts --domains tildacdn.com,tilda.ws --adjust-extension
