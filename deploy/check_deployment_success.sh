#!/usr/bin/env bash

curl -s --retry 10 $BASE_URL | grep "theCXN"