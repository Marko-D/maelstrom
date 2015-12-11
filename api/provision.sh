#!/bin/bash
BASEDIR=$(dirname $0)
echo BASEDIR
echo "Updating"
sudo apt-get -y update
echo "Installing Nginx"
sudo apt-get -y install nginx
echo "Installing Git"
sudo apt-get -y install git
echo "Installing Node.js"
curl -sL https://deb.nodesource.com/setup | sudo -E bash -
sudo apt-get install -y nodejs
sudo ln -s /usr/bin/nodejs /usr/bin/node
echo "Installing NPM Packages"
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
echo "--- Installed NPM Packages ---"

echo "Installing Redis"
sudo apt-get -y install build-essential
sudo apt-get install tcl8.5
wget http://download.redis.io/releases/redis-stable.tar.gz
tar xzf redis-stable.tar.gz
cd redis-stable
make
sudo make install
cd utils
sudo ./install_server.sh
sudo service redis_6379 start
sudo service redis_6379 stop
sudo update-rc.d redis_6379 defaults
echo "Installing MongoDB"
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get -y update
sudo apt-get install -y mongodb-org

cd ~

#echo "Raising the black flag"
#sudo npm cache clean -f
#sudo npm install -g sails
#sudo npm install -g grunt
#sudo npm install -g grunt-cli
#sudo npm install -g bower
#sails new api && cd api && npm install
#echo "New application created"

exit 0