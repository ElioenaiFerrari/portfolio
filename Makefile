include .env

.PHONY: build

build:
	make down && docker-compose build

.PHONY: down

down:
	docker-compose down 	

.PHONY: up

up:
	docker-compose up -d

.PHONY: logs

logs:
	docker-compose logs -f

.PHONY: stats

stats:
	docker-compose stats 	

.PHONY: ls

ls:
	docker container ls 

# access bash of app
.PHONY: app_bash

bash: 
	docker exec -it ${APP_NAME} bash

.PHONY: deploy

deploy:
	make destroy && kind create cluster --name=${APP_NAME}-cluster && kubectl apply -f .k8s/deployment.yaml && kubectl apply -f .k8s/service.yaml
	
.PHONY: destroy

destroy:
	kind delete cluster --name=${APP_NAME}-cluster

.PHONY: push

push:
	docker push elioenaiferrari/${APP_NAME}

