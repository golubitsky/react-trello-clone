#!/bin/sh
# wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
export HEROKU_DEBUG=1  
if [ heroku plugins:install heroku-container-registry ]; then
    echo "installed heroku-container-registry"
else
    echo "FAILED to install heroku-container-registry"
    heroku version
    exit 1
fi
docker login -u $DOCKER_USER -p $DOCKER_PASS --password=$HEROKU_API_KEY registry.heroku.com
heroku container:push web --app $HEROKU_APP_NAME