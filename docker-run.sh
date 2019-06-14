#!/bin/bash -x
docker run --name lvx -v $(pwd):/opt/src -p 8080:8080 --rm lvx
