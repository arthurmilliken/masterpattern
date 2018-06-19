#!/bin/bash -x
docker run --name lvx -v $LOCAL_SRC:/opt/src -p 80:$PORT --rm -d lvx
