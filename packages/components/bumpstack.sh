!/bin/bash

npm un -S @papillonarts/css @papillonarts/library && npm i -S @papillonarts/css @papillonarts/library

npm run clean-up && npm run install-packages && npm audit fix
