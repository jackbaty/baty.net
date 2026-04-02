SERVER_USER := "jbaty"
SERVER_HOST := "server03.baty.net"
SERVER_DIR := "/srv/baty.net/public_html"
PUBLIC_DIR := "${HOME}/sites/baty.net/_site/"
TARGET := "Hetzner"

default:
        just --list

upgrade:
	npm update

clean:
	rm -rf "_site"

checkpoint:
	git add .
	git diff-index --quiet HEAD || git commit -m "Publish checkpoint"

serve:
	npm start

build: clean
	npm run build

push:
	git push

index:
	@echo "Building search index..."
	npx -y pagefind --site "_site"

# Create a new post
post:
	./new-content.sh post

# Create (or open) today's journal entry
journal:
	./new-content.sh journal

# Create a new note
note:
	./new-content.sh note

deploy: checkpoint build index push
	@echo "\033[0;32mDeploying updates to {{TARGET}}...\033[0m"
	rsync -v -rz --checksum --delete --no-perms {{PUBLIC_DIR}} {{SERVER_USER}}@{{SERVER_HOST}}:{{SERVER_DIR}}
#	open raycast://confetti
