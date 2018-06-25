#!/bin/bash -x
docker run --name lvx -v $LOCAL_SRC:/opt/src -p 80:$PORT_HTTP -p 443:$PORT_HTTPS --rm -d lvx
