FROM ubuntu
RUN apt-get update && apt-get install -y \
  vim \
  nano
WORKDIR /home/d
COPY wootwoot.txt /home/amazeballs