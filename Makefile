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
	kind create cluster --name=${APP_NAME}-cluster && kubectl apply -f .k8s/deployment.yml && kubectl apply -f .k8s/service.yml
	
.PHONY: destroy

destroy:
	kind delete cluster --name=${APP_NAME}-cluster



