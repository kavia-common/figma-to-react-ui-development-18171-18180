#!/bin/bash
cd /home/kavia/workspace/code-generation/figma-to-react-ui-development-18171-18180/frontend_react
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

