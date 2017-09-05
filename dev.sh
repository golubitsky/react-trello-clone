#!/bin/bash
if [ -f api/tmp/pids/server.pid ]; then
  rm -f api/tmp/pids/server.pid # ensure rails server can start if previously killed
fi

docker-compose up --build
docker-compose run --rm api -d rake db:setup