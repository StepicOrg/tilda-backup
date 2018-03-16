#!/bin/bash
set -ex
DOMAIN=welcome.stepik.org

wget --timestamping --no-cache --force-directories https://$DOMAIN/sitemap.xml
# If sitemap.xml was updated run wget to mirror all pages listed in it
if [[ ! -z $(git status -s) ]]; then
    wget -q https://$DOMAIN/sitemap.xml --no-cache -O - | egrep -o "https://$DOMAIN[^<]+" | \
    wget -i - --timestamping --page-requisites --span-hosts --domains tildacdn.com,tilda.ws --adjust-extension
fi
