NAME_FRONT := front_nyffin
FRONT_DIR := frontend
DOCKER := docker
DC := docker-compose

all: up logs

up:
	$(DC) up --detach

exec_front:
	$(DOCKER) exec -it $(NAME_FRONT) sh

re: fclean all

reload: down all

logs:
	$(DC) logs --follow --tail 1000

stop:
	$(DC) stop

down:
	$(DC) down

ps:
	$(DC) ps

fclean:
	$(DC) down --rmi all --volumes
	rm -rf ./${FRONT_DIR}/.nuxt
	rm -rf ./${FRONT_DIR}/dist
	rm -rf ./${FRONT_DIR}/node_modules
