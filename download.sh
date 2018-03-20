#!/bin/bash
set -ex
DOMAINS=(
    welcome.stepik.org
    bioinf.me
)

for domain in ${DOMAINS[@]}; do
    wget --timestamping --no-cache --force-directories https://$domain/sitemap.xml
    # If sitemap.xml was updated run wget to mirror all pages listed in it
    if [[ ! -z $(git status -s) ]]; then
        wget -q https://$domain/sitemap.xml --no-cache -O - | egrep -o "https://$domain[^<]+" | \
        wget -i - --timestamping --page-requisites --span-hosts --domains tildacdn.com,tilda.ws --adjust-extension
    fi
done
