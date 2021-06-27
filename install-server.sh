sudo apt update
sudo apt -y install nginx
sudo apt -y install snapd

sudo snap install --classic certbot

sudo apt install -y curl wget gnupg2 ca-certificates lsb-release apt-transport-https

wget https://packages.sury.org/php/apt.gpg

sudo apt-key add apt.gpg

echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.list

sudo apt update

sudo apt -y install -y php7.4 php7.4-cli php7.4-common

sudo apt remove apache

sudo apt -y autoremove

sudo apt -y install git