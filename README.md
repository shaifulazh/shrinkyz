Setup
1. Installing PHP 7.4 zip file  https://windows.php.net/downloads/releases/php-7.4.13-nts-Win32-vc15-x64.zip
	1.1 Extract php on C:\php
        1.2 save path "c:\php" in system variable notes: see this tutorial how to set up path https://john-dugan.com/add-php-windows-path-variable/
        1.3 Download and Install Visual C++ Redistributable for visual studio 2015 - https://aka.ms/vs/16/release/VC_redist.x64.exe for x64 or 							https://aka.ms/vs/16/release/VC_redist.x86.exe for x86
        1.4 Add file php.ini in "C:\php" with the lines setting below

            extension_dir = "ext"
            extension=php_gd2.dll
            extension=php_curl.dll
            extension=php_mbstring.dll
            extension=php_openssl.dll
            extension=php_pdo_mysql.dll
            extension=php_pdo_sqlite.dll
            extension=php_sockets.dll
            extension=fileinfo

	1.5 Test php by running command
		
		php -v



2. Download and install Composer at https://getcomposer.org/download/
        Setup php directory into C:\php as installed before

3. Download and Install MariaDB 
        Set the root password : 1234
        Other option leave it default.

4. Download NodeJs v10.15.3 https://nodejs.org/download/release/v10.15.3/node-v10.15.3-x64.msi

Use CMD or power shell and go to source file directory

> cd {source file directory} then run this following command line.


- Run composer install / update

		composer install

		php bin/console doctrine:database:create

		php bin/console doctrine:schema:update --force

		npm run build

5. Run the webserver by 

		php bin/console server:run
		

UPDATE 1 AUGUST 2020 
1. Paypal SDK integration Sucess // add capture integration
2. Udated to symfony 4.4
3. Future Development
   - better ui
   - view order need to repair
   - add paypal detail and status review
   - important !!!! admin need to release payment
