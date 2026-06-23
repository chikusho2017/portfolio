#!/bin/bash
rm -f ~/.ssh/id_ed25519 ~/.ssh/id_ed25519.pub
ssh-keygen -t ed25519 -C "chikusho2017@gmail.com" -f ~/.ssh/id_ed25519 -N "" -q
echo "=== NEW PUBLIC KEY ==="
cat ~/.ssh/id_ed25519.pub
echo "=== END PUBLIC KEY ==="