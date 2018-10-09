#!/bin/bash

# Make sure the script runs in the directory in which it is placed
cd $(dirname `[[ $0 = /* ]] && echo "$0" || echo "$PWD/${0#./}"`)

echo 'Starting vrpc proxy'
./node_modules/.bin/vrpc-agent-js -t 'react/vrpc/example' -f './binding.js' -b mqtt://broker.hivemq.com react-app-vrpc-example
