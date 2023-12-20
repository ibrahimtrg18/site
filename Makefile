up:
	docker-compose up -d

down:
	docker-compose down

clean: down
	docker-compose rm -f
	docker network prune -f
	docker volume prune -f -a